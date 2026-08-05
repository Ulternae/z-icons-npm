import React from 'react';

export function LanCircleQThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-88-256c0-48.6 39.4-88 88-88s88 39.4 88 88c0 21.4-7.7 41.1-20.4 56.3l-36.5-36.5c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l36.5 36.5C297 336.3 277.4 344 256 344c-48.6 0-88-39.4-88-88m192 0c0-57.4-46.6-104-104-104s-104 46.6-104 104 46.6 104 104 104c25.8 0 49.5-9.4 67.7-25l22.7 22.7c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L335 323.7c15.6-18.2 25-41.8 25-67.7"})
  );
}

export default LanCircleQThin;
