import React from 'react';

export function LanCircleLThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-48-344c0-4.4-3.6-8-8-8s-8 3.6-8 8v176c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8s-3.6-8-8-8H208z"})
  );
}

export default LanCircleLThin;
