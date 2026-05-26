import React from 'react';

export const LanVacuumRobotThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m1.6-408c83.1 0 150.4 67.3 150.4 150.4 0 39.9-15.8 78.1-44 106.3l-9.6 9.6c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l9.6-9.6c31.2-31.2 48.7-73.5 48.7-117.7 0-91.9-74.5-166.4-166.4-166.4-44.1 0-86.5 17.5-117.7 48.7l-9.6 9.6c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l9.6-9.6c28.2-28.2 66.5-44 106.3-44zm-60 114.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l96 96c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3zm-64 64c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l96 96c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3z"})
);

export default LanVacuumRobotThin;
