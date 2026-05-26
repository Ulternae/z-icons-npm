import React from 'react';

export const LanMoonStarRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M48 256c0-109.3 84.2-198.8 191.3-207.3C195.4 90.9 168 150.3 168 216c0 110.5 77.2 202.9 180.6 226.3-27.9 13.9-59.3 21.7-92.6 21.7-114.9 0-208-93.1-208-208M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256c68.8 0 131.3-27.2 177.3-71.4 7.3-7 9.4-17.9 5.3-27.1s-13.7-14.9-23.8-14.1c-4.9.4-9.8.6-14.8.6-101.6 0-184-82.4-184-184 0-72.1 41.5-134.6 102.1-164.8 9.1-4.5 14.3-14.3 13.1-24.4s-8.6-18.3-18.5-20.5C294.4 2.2 275.4 0 256 0m115.2 236.8 16.6 58c1.6 5.5 6.6 9.2 12.2 9.2s10.7-3.8 12.2-9.2l16.6-58 58-16.6c5.5-1.6 9.2-6.6 9.2-12.2s-3.8-10.7-9.2-12.2l-58-16.6-16.6-58c-1.6-5.5-6.6-9.2-12.2-9.2s-10.7 3.8-12.2 9.2l-16.6 58-58 16.6c-5.5 1.6-9.2 6.6-9.2 12.2s3.8 10.7 9.2 12.2z"})
);

export default LanMoonStarRegular;
