import React from 'react';
import Story from '~/components/Story.tsx';
import { useSprings, animated, to as interpolate } from 'react-spring';
import { Post } from '../types/index.ts';
import useWindowSize from '../lib/hooks/useWindowSize.ts';

const longText = `Flow 4 hours ago | next

I really miss a consistent user experience. A core idea that I as a user can rely on to predict how a new app will work. I was in awe when I discovered as a kid that user interface were a research area. Things like Fitt's Law and so on. It was not just opinion.
Today I get the feeling it's mostly just opinion. Either the designer's opinion or the wish to copy the look of something.

Whenever I see a hamburger menu I silently think "Here someone has given up".

And there are a lot of behaviors that are not functioning well.
`;

const calculateCardSizeFromViewPort = (
  viewportWidth: number,
  viewportHeight: number,
) => {
  let cardHeight, cardWidth;
  const maxHeight = viewportHeight - 160;

  // Horizontal
  if (viewportWidth > viewportHeight) {
    // 1.25
    cardHeight = viewportHeight / 1.25;
    if (cardHeight > maxHeight) {
      cardHeight = maxHeight;
    }

    cardWidth = cardHeight / 1.8;
  } else {
    cardWidth = viewportWidth / 1.8;
    cardHeight = cardWidth * 1.8;

    if (cardHeight > maxHeight) {
      cardHeight = maxHeight;
      cardWidth = cardHeight / 1.8;
    }
  }

  return {
    cardWidth,
    cardHeight,
  };
};

const getPreviewInfo = (
  viewportWidth: number,
  viewportHeight: number,
  cardWidth: number,
) => {
  const ratio = viewportWidth / viewportHeight;
  const spaceLeft = (viewportWidth - cardWidth) / 2;

  let previewCardNum, gapNum, gapWidth, previewCardWidth;

  if (ratio > 1.5) {
    previewCardNum = 2;
    gapNum = 3;
    gapWidth = spaceLeft / 9;
    previewCardWidth = gapWidth * 3;
  } else if (ratio > 0.98) {
    previewCardNum = 1.5;
    gapNum = 2;
    gapWidth = spaceLeft / 5;
    previewCardWidth = gapWidth * 2;
  } else {
    previewCardNum = 0.5;
    gapNum = 1;
    gapWidth = spaceLeft / 2;
    previewCardWidth = gapWidth * 2;
  }

  return {
    previewCardNum,
    gapNum,
    gapWidth,
    previewCardWidth,
    previewCardHeight: previewCardWidth * 1.8,
  };
};

const WINDOW_SIZE = 7;
const MIDDLE_INDEX = Math.floor(WINDOW_SIZE / 2); // 3
const getStoryWindow = (stories: Post[], viewIndex: number) => {
  const offset = Math.ceil((WINDOW_SIZE - 1) / 2);

  return new Array(WINDOW_SIZE).fill(0).map((_, i) => {
    return stories[viewIndex + i - offset];
  });
};

const getTranslateXFromCenter = (
  index: number,
  cardWidth: number,
  gapWidth: number,
  previewCardWidth: number,
) => {
  const centerCardX = -cardWidth / 2;
  const offset = index - MIDDLE_INDEX;

  if (offset <= 0) {
    return centerCardX + (offset * previewCardWidth + offset * gapWidth);
  } else {
    return -centerCardX + ((offset - 1) * previewCardWidth + offset * gapWidth);
  }
};

const getTranslateYFromCenter = (
  index: number,
  previewCardHeight: number,
  cardHeight: number,
) => {
  if (index === MIDDLE_INDEX) {
    return -cardHeight / 2;
  } else {
    return -previewCardHeight / 2;
  }
};

const DEFAULT_TRANSITION_BUTTON_SIZE = 24;
const getTransitionButtonSizeAndCoord = (
  cardWidth: number,
  gapWidth: number,
) => {
  const maxButtonSize = gapWidth * 0.7;
  const buttonSize =
    DEFAULT_TRANSITION_BUTTON_SIZE > maxButtonSize
      ? maxButtonSize
      : DEFAULT_TRANSITION_BUTTON_SIZE;

  const buttonGap = (gapWidth - buttonSize) / 2;
  const buttonXOffset = Math.abs(-cardWidth / 2 - buttonGap - buttonSize);
  const buttonYOffset = buttonSize / 2;

  return {
    size: buttonSize,
    x: buttonXOffset,
    y: buttonYOffset,
    gap: buttonGap,
  };
};

export default function StoriesTray({ stories }: { stories: Post[] }) {
  if (stories.length === 0) {
    return null;
  }

  const [viewIndex, setViewIndex] = React.useState(0);
  const visibleStories = getStoryWindow(stories, viewIndex);

  // Do instagram like transition
  const { width: viewportWidth, height: viewportHeight } = useWindowSize();

  if (!viewportHeight || !viewportWidth) {
    return null;
  }

  const { cardWidth, cardHeight } = calculateCardSizeFromViewPort(
    viewportWidth,
    viewportHeight,
  );
  const {
    gapNum,
    previewCardNum,
    gapWidth,
    previewCardWidth,
    previewCardHeight,
  } = getPreviewInfo(viewportWidth, viewportHeight, cardWidth);

  const centerX = viewportWidth / 2;
  const centerY = viewportHeight / 2;

  const buttonCoord = getTransitionButtonSizeAndCoord(cardWidth, gapWidth);

  return (
    <div className="flex h-full w-full fixed top-0 left-0 bg-black-brand overflow-hidden">
      {visibleStories.map((_, i) => {
        const translateX = getTranslateXFromCenter(
          i,
          cardWidth,
          gapWidth,
          previewCardWidth,
        );

        const translateY = getTranslateYFromCenter(
          i,
          previewCardHeight,
          cardHeight,
        );

        const scale = i === MIDDLE_INDEX ? 1 : previewCardWidth / cardWidth;

        const transform = `translate(${centerX + translateX}px, ${
          centerY + translateY
        }px) scale(${scale})`;

        return (
          <div
            className="bg-white rounded fixed origin-top-left"
            style={{
              width: cardWidth,
              height: cardHeight,
              transform,
            }}
          />
        );
      })}

      <div
        className="flex items-center justify-center cursor-pointer fixed"
        style={{
          transform: `translate(${centerX - buttonCoord.x}px, ${
            centerY - buttonCoord.y
          }px)`,
          width: buttonCoord.size,
          height: buttonCoord.size,
          fontSize: buttonCoord.size,
        }}
      >
        <i
          className="fa fa-chevron-circle-left text-white"
          aria-hidden="true"
        />
      </div>

      <div
        className="flex items-center justify-center cursor-pointer fixed"
        style={{
          transform: `translate(${
            centerX + cardWidth / 2 + buttonCoord.gap
          }px, ${centerY - buttonCoord.y}px)`,
          width: buttonCoord.size,
          height: buttonCoord.size,
          fontSize: buttonCoord.size,
        }}
      >
        <i
          className="fa fa-chevron-circle-right text-white"
          aria-hidden="true"
        />
      </div>

      {/* <Story markdown={`# hello world\n yes I can.....`} /> */}
    </div>
  );
}
