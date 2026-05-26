import React from 'react';

export const LanCricketBatBallRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M464.5 544a80 80 0 1 1 0-160 80 80 0 1 1 0 160m71-569c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-168 168 45.1 45.1c18.7 18.7 18.7 49.1 0 67.9L238.2 498.2l-3.4 3.1c-8.4 6.9-18.9 10.7-29.8 10.7l-8.9-.2c-88.2-4.5-158.9-75.2-163.4-163.4l-.2-8.9c0-12.5 5-24.5 13.8-33.3L254.6 97.9c18.7-18.7 49.1-18.7 67.9 0l45.1 45.1 168-168zm-71 457a32 32 0 1 0 0 64 32 32 0 1 0 0-64m-384-92.2c.2 68.5 55.7 123.9 124.1 124.1l128-127.9H232.5c-13.3 0-24-10.8-24-24V211.8zm176-176V288h124.1l32-32-124.1-124.1-32 32z"})
);

export default LanCricketBatBallRegular;
