import React from 'react';

export const LanTomatoSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 512 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256-32c13.3 0 24 10.7 24 24v62.9C294.4 40.7 314.2 32 336 32h32c8.8 0 16 7.2 16 16 0 31.7-18.4 59-45.1 72 26.7 13 45.1 40.3 45.1 72 0 8.8-7.2 16-16 16h-48c-26.2 0-49.4-12.6-64-32-14.6 19.4-37.8 32-64 32h-48c-8.8 0-16-7.2-16-16 0-31.7 18.4-59 45.1-72-26.7-13-45.1-40.3-45.1-72 0-8.8 7.2-16 16-16h32c21.8 0 41.6 8.7 56 22.9V-8c0-13.3 10.7-24 24-24M80 192c0 35.3 28.7 64 64 64h48c23.3 0 45.2-6.3 64-17.1 18.8 10.9 40.7 17.1 64 17.1h48c35.3 0 64-28.7 64-64 0-18.7-4-36.4-11.2-52.4C476.6 175.1 512 231.3 512 304c0 130.9-114.6 208-256 208S0 434.9 0 304c0-72.8 35.4-128.9 91.2-164.4C84 155.6 80 173.3 80 192"})
);

export default LanTomatoSolid;
