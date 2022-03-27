import React from 'react';
import cx from 'classnames';

export default function Story({
  className,
  markdown,
  width,
  height,
  style,
}: {
  markdown: string;
  width: number;
  height: number;
  style?: React.StyleHTMLAttributes<HTMLDivElement>['style'];
  className?: string;
}) {
  return (
    <div
      className={cx(
        'flex items-center justify-center whitespace-pre rounded',
        className,
      )}
      style={{
        width,
        height,
        ...style,
      }}
    >
      {markdown}
    </div>
  );
}
