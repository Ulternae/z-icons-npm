import React from 'react';

export const LanLassoThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 48c64.5 0 123.6 16.8 167 44.7S496 161 496 208s-29.6 87.4-73 115.3C379.5 351.2 320.4 368 256 368c-38.6 0-75.2-6-107.7-16.8L88.5 323C45.4 295.1 16 254.8 16 208c0-47 29.6-87.4 73-115.3S191.5 48 256 48m-55.9 331.9c18.1 2.7 36.8 4.1 55.9 4.1 67.1 0 129.3-17.4 175.7-47.3C477.8 307 512 262.3 512 208s-34.2-99.1-80.3-128.7C385.3 49.4 323.1 32 256 32S126.7 49.4 80.3 79.3C34.2 108.9 0 153.7 0 208s34.2 99.1 80.3 128.7c18.4 11.8 39.3 21.7 62 29.3l31 14.6c21.2 10 34.7 31.3 34.7 54.8 0 33.4-27.1 60.5-60.5 60.5h-2.6c-9.8 0-19.5-2.3-28.3-6.7l-65-32.5c-4-2-8.8-.4-10.7 3.6s-.4 8.8 3.6 10.7l65 32.5c11 5.5 23.1 8.4 35.4 8.4h2.6c42.3 0 76.5-34.3 76.5-76.5 0-21.4-8.9-41.4-23.9-55.6z"})
);

export default LanLassoThin;
