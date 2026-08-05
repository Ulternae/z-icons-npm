import React from 'react';

export function LanBaguetteSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"m322.5 100.5-74.4 49.6L305 207c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-63.7-63.7-74.5 49.6 60.1 60.1c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-67-66.7L57 277.5C-1.8 316.7-17.7 396.2 21.5 455s118.7 74.7 177.5 35.5l384-256c58.8-39.2 74.7-118.7 35.5-177.5S499.8-17.7 441 21.5l-77.7 51.8L417 127c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-60.5-60.5z"})
  );
}

export default LanBaguetteSolid;
