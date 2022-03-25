import React from 'react';
import Story from '~/components/Story.tsx';
import { animated, useSpring } from 'react-spring';
import { Post } from '../types/index.ts';
import useWindowSize from '../lib/hooks/useWindowSize.ts';

const longText = `Flow 4 hours ago | next [–]

I really miss a consistent user experience. A core idea that I as a user can rely on to predict how a new app will work. I was in awe when I discovered as a kid that user interface were a research area. Things like Fitt's Law and so on. It was not just opinion.
Today I get the feeling it's mostly just opinion. Either the designer's opinion or the wish to copy the look of something.

Whenever I see a hamburger menu I silently think "Here someone has given up".

And there are a lot of behaviors that are not functioning well.
`;

export default function StoriesTray({ stories }: { stories: Post[] }) {
  const [viewIndex, setViewIndex] = React.useState(0);

  // Do instagram like transition
  const { width: viewportWidth, height: viewportHeight } = useWindowSize();

  if (!viewportHeight || !viewportWidth) {
    return null;
  }

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

  if (stories.length === 0) {
    return null;
  }

  return (
    <div className="flex h-full w-full fixed top-0 left-0 bg-black-brand overflow-hidden">
      <div
        className="bg-white rounded fixed origin-top-left"
        style={{
          width: cardWidth,
          height: cardHeight,
          transform: `translate(${viewportWidth / 2 - cardWidth / 2}px, ${
            viewportHeight / 2 - cardHeight / 2
          }px)`,
        }}
      ></div>

      {/* <Story markdown={`# hello world\n yes I can.....`} /> */}
    </div>
  );
}
