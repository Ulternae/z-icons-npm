import React from 'react';

export const LanUserVneckHairLongSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M304 128c0-20.2-7.5-38.6-19.8-52.7l-33.1 28.9c-17.5 15.3-40 23.8-63.2 23.8H144v16c0 44.2 35.8 80 80 80s80-35.8 80-80zm-208 0c0-38.9 17.4-73.8 44.8-97.3 3.6-3.8 7.9-7.1 12.6-9.5C173.6 7.8 197.9 0 224 0c70.7 0 128 57.3 128 128v24.2c0 25.5 10.1 49.9 28.1 67.9l13.3 13.3c4.2 4.2 6.6 10 6.6 16 0 12.5-10.1 22.6-22.6 22.6H70.6C58.1 272 48 261.9 48 249.4c0-6 2.4-11.8 6.6-16l13.3-13.3c18-18 28.1-42.4 28.1-67.9zm46.6 195 67 50.2c8.5 6.4 20.3 6.4 28.8 0l67-50.2c6.5-4.9 15.2-6.2 22.6-2.8 61.4 28.2 104.1 90.2 104.1 162.1 0 16.4-13.3 29.7-29.7 29.7H45.7C29.3 512 16 498.7 16 482.3c0-72 42.7-134 104.1-162.1 7.4-3.4 16.1-2.1 22.6 2.8z"})
);

export default LanUserVneckHairLongSolid;
