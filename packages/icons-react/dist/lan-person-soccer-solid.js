import React from 'react';

export const LanPersonSoccerSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M312 24a56 56 0 1 0-112 0 56 56 0 1 0 112 0M115.7 181c1.2-3 4.2-5 7.4-5H159l-22.7 90.6c-8.3 33.2 11 67 43.7 76.8l96 28.8L226.8 483c-7.2 16.1.1 35.1 16.2 42.2s35.1-.1 42.2-16.2l56.6-127.4c11.7-26.4-2.4-57.2-30.1-65.5l-75.4-22.6 20.7-70.4 10 17.1c11.5 19.7 32.5 31.8 55.3 31.8h61.6c17.7 0 32-14.3 32-32s-14.3-32-32-32h-61.6l-32.8-56.3c-14.3-24.6-40.6-39.7-69.1-39.7h-97.3c-29.4 0-55.9 17.9-66.9 45.3l-21.9 54.8c-6.6 16.4 1.4 35 17.8 41.6s35-1.4 41.6-17.8zm-11.9 207.6c-1.9 5.4-5.3 10.3-9.8 13.9l-82.4 68C-2 481.7-4 501.9 7.3 515.5s31.4 15.6 45 4.3l82.4-67.9c13.4-11 23.5-25.5 29.3-41.8l6.9-19.3-4.7-1.4c-20.4-6.1-37.9-17.6-51.2-32.4l-11.3 31.7zM448 544a64 64 0 1 0 0-128 64 64 0 1 0 0 128"})
);

export default LanPersonSoccerSolid;
