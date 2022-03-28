import cx from 'classnames';
import React from 'react';

export default function Logo({
  style,
  className,
}: {
  size?: number;
  className?: string;
  style?: React.StyleHTMLAttributes<HTMLDivElement>;
}) {
  return (
    <span
      style={style}
      className={cx(
        className,
        'cursor-pointer select-none font-sourceSans font-semibold'
      )}
    >
      <i className='fa fa-file-text' aria-hidden='true' />
      &nbsp; HackMD
    </span>
  );
}
