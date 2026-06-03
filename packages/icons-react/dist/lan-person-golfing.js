import React from 'react';

export const LanPersonGolfing = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 448 576.076',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M352.5 0h-14.1l39.4 78.8c15.6 31.1 3.4 69-27.4 85.3l-21 11.1 43.5 111.9c7.8 20.1 11 41.7 9.4 63.2l-13.9 178.9c-.7 8.8-8.4 15.4-17.2 14.7s-15.4-8.4-14.7-17.2L350 352h-62.9c-1.9 10.2-5.8 20-11.6 29L173.9 536.8c-4.8 7.4-14.7 9.5-22.1 4.7s-9.5-14.7-4.7-22.1l101.6-155.9c8.6-13.2 10.2-29.9 4.2-44.5l-31.6-76.8c-9.7-23.6.7-50.6 23.7-61.6l56.3-26.8 34.1-18c15.4-8.1 21.5-27.1 13.7-42.6L302.6 0h-187L97.4 48.4C93.9 57.8 84.9 64 74.9 64H28C11.3 64-.3 47.3 5.5 31.6L19.7-6c5.9-15.6 20.8-26 37.5-26h295.3c8.8 0 16 7.2 16 16s-7.2 16-16 16m-65.9 320H349c-1.3-7.3-3.3-14.4-5.9-21.3l-42.4-109.2-41.8 19.9c-7.7 3.7-11.2 12.7-7.9 20.5l31.6 76.8c1.8 4.3 3.2 8.7 4.1 13.2zM248.5 96a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-80 0a56 56 0 1 1 112 0 56 56 0 1 1-112 0M57.1 0c-3.3 0-6.3 2.1-7.5 5.2L39.6 32h29.8l12-32z"})
);

export default LanPersonGolfing;
