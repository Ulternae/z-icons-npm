import React from 'react';

export const LanSquareRootThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M386.6 48c-17.2 0-32.5 11-37.9 27.4L215.6 474.5c-1 3.1-3.8 5.2-7 5.4s-6.3-1.5-7.7-4.4L89.7 253.3c-4.1-8.2-12.4-13.3-21.5-13.3H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h60.2c15.2 0 29 8.6 35.8 22.1l102.5 205 127-380.9c7.6-22.9 29-38.3 53.1-38.3L568 32c4.4 0 8 3.6 8 8s-3.6 8-8 8z"})
);

export default LanSquareRootThin;
