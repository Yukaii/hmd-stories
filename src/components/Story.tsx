import { animated } from '@react-spring/web';
import cx from 'classnames';
import React from 'react';

import { PostType } from '../types';

export const variantStyles: Record<
  PostType,
  React.StyleHTMLAttributes<HTMLDivElement>['style']
> = {
  [PostType.DEFAULT]: {
    backgroundImage: `url(/images/stories/bg-1.png)`,
    color: 'white',
  },
  [PostType.WAVE]: {
    backgroundImage: `url(/images/stories/bg-2.png)`,
    color: 'white',
  },
  [PostType.ORANGE]: {
    backgroundImage: `url(/images/stories/bg-3.png)`,
    color: 'white',
  },
  [PostType.BLACK]: {
    backgroundImage: `url(/images/stories/bg-4.png)`,
    color: '#18FF90',
  },
};

export default function Story({
  className,
  children,
  width,
  height,
  style,
  variant = PostType.DEFAULT,
  isAnimated = true,
  ...props
}: {
  width: number;
  height: number;
  style?: any;
  children?: any;
  className?: string;
  variant?: PostType;
  isAnimated?: boolean;
} & { onClick?: React.HTMLAttributes<HTMLDivElement>['onClick'] }) {
  const Comp = isAnimated ? animated.div : 'div';

  return React.createElement(
    Comp,
    {
      className: cx(
        'flex items-center justify-center break-all whitespace-pre-wrap rounded-2xl bg-cover text-center',
        className
      ),
      style: {
        width,
        height,
        ...variantStyles[variant],
        ...style,
      },
      ...props,
    },
    children
  );
}
