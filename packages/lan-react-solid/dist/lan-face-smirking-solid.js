import React from 'react';

export function LanFaceSmirkingSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m128-168c0 39.8-32.2 72-72 72H184c-13.3 0-24-10.7-24-24s10.7-24 24-24h128c13.3 0 24-10.7 24-24s10.7-24 24-24 24 10.7 24 24M120 192h64c22.1 0 40 17.9 40 40s-17.9 40-40 40c-19.4 0-35.5-13.7-39.2-32H120c-13.3 0-24-10.7-24-24s10.7-24 24-24m168 24c0-13.3 10.7-24 24-24h64c22.1 0 40 17.9 40 40s-17.9 40-40 40c-19.4 0-35.5-13.7-39.2-32H312c-13.3 0-24-10.7-24-24"})
  );
}

export default LanFaceSmirkingSolid;
