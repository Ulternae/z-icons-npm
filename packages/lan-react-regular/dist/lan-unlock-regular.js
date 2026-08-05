import React from 'react';

export function LanUnlockRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 384 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M112 96c0-44.2 35.8-80 80-80 42.1 0 76.6 32.5 79.8 73.8 1 13.2 12.6 23.1 25.8 22.1s23.1-12.6 22.1-25.8C314.5 20 259.4-32 192-32 121.3-32 64 25.3 64 96v64c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64H112zM64 208h256c8.8 0 16 7.2 16 16v224c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224c0-8.8 7.2-16 16-16"})
  );
}

export default LanUnlockRegular;
