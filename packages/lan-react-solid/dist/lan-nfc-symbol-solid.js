import React from 'react';

export function LanNfcSymbolSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M348.9 471.8c10.3 9.3 25.4 10.8 37.4 3.9C461.6 432.1 512 348.8 512 256S461.6 79.9 386.3 36.3c-15.3-8.8-34.9-3.6-43.7 11.7s-3.6 34.9 11.7 43.7C410.1 124 448 186.4 448 256c0 61.4-29.5 117.2-74.8 151.7L213.4 264.2c-13.2-11.8-33.4-10.7-45.2 2.4s-10.7 33.4 2.4 45.2zM163.1 40.2c-10.3-9.3-25.4-10.8-37.4-3.9C50.3 79.9 0 163.2 0 256s50.3 176.1 125.7 219.7c15.3 8.8 34.9 3.6 43.7-11.7s3.6-34.9-11.7-43.7C101.9 388 64 325.7 64 256c0-61.4 29.5-117.2 74.8-151.6l159.8 143.4c13.2 11.8 33.4 10.7 45.2-2.4s10.7-33.4-2.4-45.2z"})
  );
}

export default LanNfcSymbolSolid;
