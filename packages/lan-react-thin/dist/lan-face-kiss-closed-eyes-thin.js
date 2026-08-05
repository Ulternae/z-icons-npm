import React from 'react';

export function LanFaceKissClosedEyesThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m248 48c0-4.4 3.6-8 8-8h24c22.1 0 40 17.9 40 40 0 13.1-6.3 24.7-16 32 9.7 7.3 16 18.9 16 32 0 22.1-17.9 40-40 40h-24c-4.4 0-8-3.6-8-8s3.6-8 8-8h24c13.3 0 24-10.7 24-24s-10.7-24-24-24h-24c-4.4 0-8-3.6-8-8s3.6-8 8-8h24c13.3 0 24-10.7 24-24s-10.7-24-24-24h-24c-4.4 0-8-3.6-8-8m-80-112c-22.1 0-40 17.9-40 40 0 4.4-3.6 8-8 8s-8-3.6-8-8c0-30.9 25.1-56 56-56h16c30.9 0 56 25.1 56 56 0 4.4-3.6 8-8 8s-8-3.6-8-8c0-22.1-17.9-40-40-40zm120 40c0 4.4-3.6 8-8 8s-8-3.6-8-8c0-30.9 25.1-56 56-56h16c30.9 0 56 25.1 56 56 0 4.4-3.6 8-8 8s-8-3.6-8-8c0-22.1-17.9-40-40-40h-16c-22.1 0-40 17.9-40 40"})
  );
}

export default LanFaceKissClosedEyesThin;
