import React from 'react';

export function LanCitrusThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M384 112c44.2 0 80-35.8 80-80V16h-80c-44.2 0-80 35.8-80 80v16zm0 16h-80c-8.8 0-16-7.2-16-16V96c0-15.8 3.8-30.8 10.6-43.9-13.8-2.7-28.1-4.1-42.6-4.1C132.3 48 32 148.3 32 272s100.3 224 224 224 224-100.3 224-224c0-40.8-10.9-79.1-30-112q7.2-3.75 13.8-8.1C484.3 187.2 496 228.3 496 272c0 132.5-107.5 240-240 240S16 404.5 16 272 123.5 32 256 32c17.8 0 35.1 1.9 51.8 5.6C325.3 14.7 353 0 384 0h80c8.8 0 16 7.2 16 16v16c0 53-43 96-96 96"})
  );
}

export default LanCitrusThin;
