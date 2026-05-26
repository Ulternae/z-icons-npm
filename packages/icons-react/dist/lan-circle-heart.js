import React from 'react';

export const LanCircleHeart = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m20.4-293.8c6.5-6.5 15.4-10.2 24.7-10.2h2.9c17.7 0 32 14.3 32 32 0 21.4-14.5 42.5-34.6 61-16.9 15.5-35.4 27-45.4 32.7-10-5.7-28.5-17.2-45.4-32.7-20.1-18.5-34.6-39.7-34.6-61 0-17.7 14.3-32 32-32h2.9c9.3 0 18.1 3.7 24.7 10.2l9.1 9.1c3 3 7.1 4.7 11.3 4.7s8.3-1.7 11.3-4.7zm24.7-42.2c-16.7 0-32.8 6.3-45.1 17.5-12.3-11.2-28.4-17.5-45.1-17.5H208c-35.3 0-64 28.7-64 64s23.1 64.5 45 84.6c22.4 20.6 46.8 34.7 55.9 39.6 7 3.8 15.3 3.8 22.2 0 9.1-4.9 33.5-19 55.9-39.6 21.8-20.1 45-49.3 45-84.6s-28.7-64-64-64z"})
);

export default LanCircleHeart;
