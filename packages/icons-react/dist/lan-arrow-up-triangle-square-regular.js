import React from 'react';

export const LanArrowUpTriangleSquareRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M384 32c-9.9 0-19.1 5.2-24.2 13.7L275.6 186c-2.3 3.9-3.6 8.4-3.6 12.9 0 13.8 11.2 25.1 25.1 25.1H471c13.8 0 25.1-11.2 25.1-25.1 0-4.5-1.2-9-3.6-12.9L408.2 45.7C403.1 37.2 393.9 32 384 32m-48 400v-96h96v96zm48-333.4 46.4 77.4h-92.8zM288 432c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48zM145 39c-9.4-9.4-24.6-9.4-33.9 0L23 127c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47V456c0 13.3 10.7 24 24 24s24-10.7 24-24V113.9l47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9z"})
);

export default LanArrowUpTriangleSquareRegular;
