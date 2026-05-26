import React from 'react';

export const LanFaceAstonishedRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m256 48c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48s-48-21.5-48-48v-32c0-26.5 21.5-48 48-48m-112-80a32 32 0 1 1 64 0 32 32 0 1 1-64 0m192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m-144-44c-4.2 0-8.4.3-12.5.8-20.3 2.7-38.9 11.9-53.8 25.8-8.1 7.5-20.7 7.1-28.3-1s-7.1-20.7 1-28.3c20.6-19.3 46.8-32.4 75.9-36.2q8.7-1.2 17.7-1.2c11 0 20 9 20 20s-9 20-20 20zm140.5.8c-4.1-.5-8.3-.8-12.5-.8-11 0-20-9-20-20s9-20 20-20q9 0 17.7 1.2c29.1 3.8 55.3 17 75.9 36.2 8.1 7.5 8.5 20.2 1 28.3s-20.2 8.5-28.3 1c-14.9-13.9-33.5-23.1-53.8-25.8z"})
);

export default LanFaceAstonishedRegular;
