import React from 'react';

export const LanHryvniaSignThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M328 135.3c0-64.3-60-111.8-122.6-97L85.7 66.5c-4.3 1-7 5.3-5.9 9.6s5.3 7 9.6 5.9l119.7-28.2C261.6 41.4 312 81.3 312 135.3c0 30.1-16.2 57.9-42.3 72.7H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h368c4.4 0 8-3.6 8-8s-3.6-8-8-8h-79.5c19.8-18.6 31.5-44.8 31.5-72.7M376.3 288H7.7c-4.3.1-7.7 3.7-7.7 8 0 4.4 3.6 8 8 8h88.1C71.2 321 56 349.3 56 379.8c0 55.9 49.6 98.8 104.9 90.8l157.6-22.7c4.4-.6 7.4-4.7 6.8-9.1s-4.7-7.4-9.1-6.8l-157.6 22.8c-45.7 6.6-86.6-28.8-86.6-75 0-27.6 15-53.1 39.3-66.4l17.1-9.4H376c4.4 0 8-3.6 8-8 0-4.3-3.4-7.9-7.7-8"})
);

export default LanHryvniaSignThin;
