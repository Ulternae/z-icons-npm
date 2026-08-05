import React from 'react';

export function LanNoteSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 416c0 35.3 28.7 64 64 64h213.5c17 0 33.3-6.7 45.3-18.7l106.5-106.6c12-12 18.7-28.3 18.7-45.3V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96zm272 5.5V328c0-13.3 10.7-24 24-24h93.5zM68 384a28 28 0 1 1 56 0 28 28 0 1 1-56 0m28-228a28 28 0 1 1 0-56 28 28 0 1 1 0 56M68 256a28 28 0 1 1 56 0 28 28 0 1 1-56 0"})
  );
}

export default LanNoteSolid;
