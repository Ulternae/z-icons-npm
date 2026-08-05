import React from 'react';

export function LanCircleIndianRupee({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-80-384c-8.8 0-16 7.2-16 16s7.2 16 16 16h48c20.9 0 38.7 13.4 45.3 32H176c-8.8 0-16 7.2-16 16s7.2 16 16 16h93.3c-6.6 18.6-24.4 32-45.3 32h-48c-6.9 0-13 4.4-15.2 10.9s.1 13.7 5.6 17.9l128 96c7.1 5.3 17.1 3.9 22.4-3.2s3.9-17.1-3.2-22.4L224 288c38.7 0 71-27.5 78.4-64H336c8.8 0 16-7.2 16-16s-7.2-16-16-16h-33.6c-2.4-11.8-7.4-22.7-14.4-32h48c8.8 0 16-7.2 16-16s-7.2-16-16-16z"})
  );
}

export default LanCircleIndianRupee;
