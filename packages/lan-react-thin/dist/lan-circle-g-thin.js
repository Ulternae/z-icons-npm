import React from 'react';

export function LanCircleGThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-88-256c0-48.6 39.4-88 88-88 22.5 0 43.1 8.5 58.7 22.4 3.3 2.9 8.3 2.7 11.3-.6s2.7-8.3-.6-11.3C307 162 282.7 152 256.1 152c-57.4 0-104 46.6-104 104s46.6 104 104 104 104-46.6 104-104c0-4.4-3.6-8-8-8h-86.5c-4.4 0-8 3.6-8 8s3.6 8 8 8h78.2c-4 44.9-41.8 80-87.7 80-48.6 0-88-39.4-88-88z"})
  );
}

export default LanCircleGThin;
