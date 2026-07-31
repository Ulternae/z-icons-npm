import React from 'react';

export const LanFieldHockeyStickBallRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -16.043 576 560.043',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M464.5 544a80 80 0 1 1 0-160 80 80 0 1 1 0 160M428 16.9c21.6-33.4 66.1-43 99.5-21.4s43 66.1 21.4 99.5l-222 343.7-5.8 8.3c-29.9 40.8-77.6 65-128.5 65l-8.2-.2C102.5 507.6 36.9 442 32.7 360.2l-.2-8.2v-7.9c0-39.8 32.2-72 72-72l7.4.4c36.3 3.7 64.6 34.4 64.6 71.6v7.9c0 7.7 5.5 14.2 12.8 15.7l3.2.3c4.8 0 9.2-2.1 12.3-5.7l1.2-1.6 10.8-16.7L428.1 17zM464.5 432a32 32 0 1 0 0 64 32 32 0 1 0 0-64m-218.2-45.3c-11.8 18.2-32 29.3-53.8 29.3-35.4 0-64-28.7-64.1-64.1V344c0-13.3-10.8-24-24-24-12.4 0-22.6 9.4-23.9 21.5l-.1 2.5v7.9c0 61.9 50.2 112.1 112.1 112.1 38 0 73.5-19.3 94.1-51.3l148.8-230.5-40.7-25.4-148.5 229.9zM501.5 35.9c-10.4-6.7-24.2-4.3-31.8 5.2l-1.4 2-47.5 73.5 40.7 25.4 47.1-72.9c6.7-10.4 4.3-24.1-5.2-31.7l-2-1.4z"})
);

export default LanFieldHockeyStickBallRegular;
