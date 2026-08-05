import React from 'react';

export function LanCitrus({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M384 96c35.3 0 64-28.7 64-64h-64c-35.3 0-64 28.7-64 64zm0 32h-80c-8.8 0-16-7.2-16-16V96c0-10 1.5-19.7 4.4-28.8-11.8-2.1-24-3.2-36.4-3.2-114.9 0-208 93.1-208 208s93.1 208 208 208 208-93.1 208-208c0-38.5-10.4-74.5-28.7-105.4 10.1-3.8 19.6-8.8 28.5-14.7C484.3 187.2 496 228.3 496 272c0 132.5-107.5 240-240 240S16 404.5 16 272 123.5 32 256 32c17.8 0 35.1 1.9 51.8 5.6C325.3 14.7 353 0 384 0h80c8.8 0 16 7.2 16 16v16c0 53-43 96-96 96"})
  );
}

export default LanCitrus;
