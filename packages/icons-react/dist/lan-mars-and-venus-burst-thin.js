import React from 'react';

export const LanMarsAndVenusBurstThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -48 640 576',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M496.3-40c0-4.4 3.6-8 8-8h112c4.4 0 8 3.6 8 8V72c0 4.4-3.6 8-8 8s-8-3.6-8-8v-92.7l-110 110c28.6 31.3 46 72.9 46 118.7 0 94.5-74.5 171.6-168 175.8V448h72c4.4 0 8 3.6 8 8s-3.6 8-8 8h-72v56c0 4.4-3.6 8-8 8s-8-3.6-8-8v-56h-72c-4.4 0-8-3.6-8-8s3.6-8 8-8h72v-64.2c-93.5-4.2-168-81.3-168-175.8 0-97.2 78.8-176 176-176C414 32 455.7 49.4 487 78L597-32h-92.7c-4.4 0-8-3.6-8-8m32 248a160 160 0 1 0-320 0 160 160 0 1 0 320 0M161.8-11.5c5.7-12.4 23.4-12.4 29.1 0l25.3 55.1c-4.2 3.9-8.2 7.9-12.1 12.1L176.3-4.8l-34.1 74.2c-1.6 3.5-5.5 5.3-9.2 4.4L53.7 54.2l36.8 73c1.7 3.3.9 7.3-1.9 9.7l-58.6 50 73.5 16.8c3.7.8 6.3 4.2 6.2 7.9l-1.5 81.7 41.8-34.6c1.3 5.7 2.9 11.4 4.6 16.9l-36.2 30c-10.5 8.7-26.4 1.1-26.2-12.6l1.4-75.2-67.2-15.3c-12.8-2.9-16.8-19.2-6.8-27.8l53.7-46-33.9-67.4c-6.2-12.2 4.9-26 18.1-22.7l72.9 18 31.4-68.2z"})
);

export default LanMarsAndVenusBurstThin;
