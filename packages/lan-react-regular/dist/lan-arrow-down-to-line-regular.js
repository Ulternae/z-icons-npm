import React from 'react';

export function LanArrowDownToLineRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M360 512c13.3 0 24-10.7 24-24s-10.7-24-24-24H24c-13.3 0-24 10.7-24 24s10.7 24 24 24zM175 377c9.4 9.4 24.6 9.4 33.9 0L345 241c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-95 95V24c0-13.3-10.7-24-24-24s-24 10.7-24 24v278.1l-95-95c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"})
  );
}

export default LanArrowDownToLineRegular;
