import React from 'react';

export const LanPersonPrayingRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M320 64a64 64 0 1 0-128 0 64 64 0 1 0 128 0M170.1 192c5.3 0 10.2 2.7 12.9 7.2l4.3 7.1-67.2 161.2-9.4-6c-9.8-6.3-13.7-18.7-9.2-29.4L156 201.4c2.4-5.7 7.9-9.3 14-9.3zm48.3 64.7 7.4 12.1c12.8 20.9 41.2 25.4 59.9 9.6l89.8-76c10.1-8.6 11.4-23.7 2.8-33.8s-23.7-11.4-33.8-2.8l-82.7 70-37.9-61.6c-11.5-18.7-31.9-30.1-53.8-30.1-25.5 0-48.5 15.3-58.3 38.9L57.3 313.6c-13.4 32.3-1.8 69.5 27.6 88.3l97 62.1h-158c-13.3 0-24 10.7-24 24s10.7 24 24 24h240c10.7 0 20-7 23-17.3s-1.1-21.2-10.1-27l-115.7-74 57.1-137.1z"})
);

export default LanPersonPrayingRegular;
