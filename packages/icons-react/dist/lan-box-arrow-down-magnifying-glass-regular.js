import React from 'react';

export const LanBoxArrowDownMagnifyingGlassRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 576.55 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256.7 16c-7.1 14.9-12 31.1-14.4 48h-96.8c-5.2 0-10 2.5-13 6.7l-41 57.3h153.8c4.2 17.2 11 33.3 20.1 48H80.5v240c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V254.2c11.2-1.6 22.1-4.3 32.5-8l15.5 15.5v154.2l-.3 6.5c-3.1 30.1-27 54.1-57.1 57.1l-6.5.3h-320l-6.5-.3C60 476.4 36 452.5 33 422.4l-.3-6.5V148.4c0-11.7 3.2-23.1 9.2-33l2.7-4.2 48.9-68.5C104 28 120.2 18.5 137.9 16.4l7.7-.5h111.2zm-.2 192c13.3 0 24 10.7 24 24v86.1l23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-64 64-1.8 1.7c-9.4 7.7-23.3 7.1-32.1-1.7l-64-64-1.7-1.8c-7.7-9.4-7.1-23.3 1.7-32.1s22.7-9.3 32.1-1.7l1.8 1.7 23 23V232c0-13.3 10.7-24 24-24zm152-239.9c66.3 0 120 53.7 120 120 0 24.4-7.4 47.2-19.9 66.1l60.9 60.9c9.4 9.4 9.4 24.6 0 33.9-8.8 8.8-22.7 9.3-32.1 1.7l-1.8-1.7-60.9-60.9c-19 12.6-41.7 19.9-66.2 19.9-66.3 0-120-53.7-120-120s53.7-120 120-120zm0 48a72 72 0 1 0 0 144 72 72 0 1 0 0-144"})
);

export default LanBoxArrowDownMagnifyingGlassRegular;
