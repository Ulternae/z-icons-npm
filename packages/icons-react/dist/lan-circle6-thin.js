import React from 'react';

export const LanCircle6Thin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m32-344c0-4.4-3.6-8-8-8h-40c-30.9 0-56 25.1-56 56v80c0 .8.1 1.5.3 2.3C187.4 328.5 213 352 244 352h24c33.1 0 60-26.9 60-60s-26.9-60-60-60h-24c-17.4 0-33 7.4-44 19.2V216c0-22.1 17.9-40 40-40h40c4.4 0 8-3.6 8-8m-44 168c-24.3 0-44-19.7-44-44s19.7-44 44-44h24c24.3 0 44 19.7 44 44s-19.7 44-44 44z"})
);

export default LanCircle6Thin;
