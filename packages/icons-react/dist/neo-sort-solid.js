import React from 'react';

export const NeoSortSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 560',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M448 190.6c0-11.8-4-23.7-12.1-33.3-19.8-23.4-89.6-100.9-185.7-150.9C241.9 2.1 232.9.1 224 .1s-17.9 2-26.2 6.3C101.7 56.3 31.9 133.9 12.1 157.3 4 166.9 0 178.8 0 190.6c0 24.1 16.8 46.6 42.7 50.6C71 245.6 128.6 252 224 252s153-6.4 181.3-10.8c26-4 42.7-26.5 42.7-50.6m0 178.8c0 11.8-4 23.7-12.1 33.3-19.8 23.4-89.6 101-185.7 150.9-8.3 4.3-17.3 6.3-26.2 6.3s-17.9-2-26.2-6.3C101.7 503.7 31.9 426.1 12.1 402.7 4 393.1 0 381.2 0 369.4c0-24.1 16.8-46.6 42.7-50.6C71 314.4 128.6 308 224 308s153 6.4 181.3 10.8c26 4 42.7 26.5 42.7 50.6"})
);

export default NeoSortSolid;
