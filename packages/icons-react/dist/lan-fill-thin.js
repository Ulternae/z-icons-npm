import React from 'react';

export const LanFillThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M296 16c19.6 0 38.4 7.8 52.3 21.7l126 126c13.9 13.9 21.7 32.7 21.7 52.3s-7.8 38.4-21.7 52.3L454.6 288H16.4c1.8-16.7 9.3-32.3 21.2-44.3L151 130.3l91.3 91.4c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L162.3 119l81.4-81.3C257.6 23.8 276.4 16 296 16M139.7 119 26.3 232.4C9.5 249.3 0 272.1 0 296s9.5 46.7 26.3 63.6l126.1 126.1c16.9 16.8 39.7 26.3 63.6 26.3s46.7-9.5 63.6-26.3l206.1-206.1c16.8-16.9 26.3-39.7 26.3-63.6s-9.5-46.7-26.3-63.6L359.6 26.3C342.7 9.5 319.9 0 296 0s-46.7 9.5-63.6 26.3L151 107.7 77.7 34.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3zm-102 229.3A73.7 73.7 0 0 1 16.5 304h422.2L268.4 474.3c-14 13.9-32.8 21.7-52.4 21.7s-38.4-7.8-52.3-21.7z"})
);

export default LanFillThin;
