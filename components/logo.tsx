import React from 'react';
import cx from 'classnames'

export default function Logo({ style, className }: { size?: number, className?: string, style?: React.StyleHTMLAttributes<HTMLDivElement> }) {
  return <span style={style} className={cx(className, 'font-semibold font-sourceSans cursor-pointer select-none')}>
    <i className="fa fa-file-text" aria-hidden="true" />
    &nbsp;
    HackMD
  </span>;
}
