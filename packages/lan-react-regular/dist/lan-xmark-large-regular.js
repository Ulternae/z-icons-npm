import React from 'react';

export function LanXmarkLargeRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M7.5 41c-9.3-9.4-9.3-24.6 0-34s24.6-9.3 34 0l215 215 215-215c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-215 215 215 215c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-215-215-215 215c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l215-215-215-215z"})
  );
}

export default LanXmarkLargeRegular;
