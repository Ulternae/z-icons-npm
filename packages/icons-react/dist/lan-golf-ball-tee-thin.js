import React from 'react';

export const LanGolfBallTeeThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M296 352c17.7 0 32 14.3 32 32s-14.3 32-32 32h-64c-4.4 0-8 3.6-8 8v80c0 4.4-3.6 8-8 8s-8-3.6-8-8v-80c0-13.3 10.7-24 24-24h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H88c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c13.3 0 24 10.7 24 24v80c0 4.4-3.6 8-8 8s-8-3.6-8-8v-80c0-4.4-3.6-8-8-8H88c-17.7 0-32-14.3-32-32s14.3-32 32-32zM192 0c106 0 192 86 192 192 0 41.8-13.4 80.5-36.1 112h-20.2c25.1-30.4 40.2-69.4 40.2-112 0-97.2-78.8-176-176-176S16 94.8 16 192c0 42.6 15.1 81.6 40.2 112H36C13.4 272.5 0 233.8 0 192 0 86 86 0 192 0m40 248c4.4 0 8 3.6 8 8 0 22.1-17.9 40-40 40-4.4 0-8-3.6-8-8s3.6-8 8-8c13.3 0 24-10.7 24-24 0-4.4 3.6-8 8-8m64-64c4.4 0 8 3.6 8 8 0 22.1-17.9 40-40 40-4.4 0-8-3.6-8-8s3.6-8 8-8c13.3 0 24-10.7 24-24 0-4.4 3.6-8 8-8m-80-16c4.4 0 8 3.6 8 8 0 22.1-17.9 40-40 40-4.4 0-8-3.6-8-8s3.6-8 8-8c13.3 0 24-10.7 24-24 0-4.4 3.6-8 8-8"})
);

export default LanGolfBallTeeThin;
