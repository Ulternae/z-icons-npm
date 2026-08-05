import React from 'react';

export function LanArrowsUpToLineRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24h400c13.3 0 24-10.7 24-24S437.3 0 424 0zm89 135c-9.4-9.4-24.6-9.4-33.9 0L7 207c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l31-31V488c0 13.3 10.7 24 24 24s24-10.7 24-24V209.9l31 31c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-72-72zm256 0c-9.4-9.4-24.6-9.4-33.9 0l-72 72c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l31-31V488c0 13.3 10.7 24 24 24s24-10.7 24-24V209.9l31 31c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-72-72z"})
  );
}

export default LanArrowsUpToLineRegular;
