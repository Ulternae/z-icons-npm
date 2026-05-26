import React from 'react';

export const LanEuroSignThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M53.2 208C75.1 107.4 164.8 32 272 32h56c4.4 0 8 3.6 8 8s-3.6 8-8 8h-56c-98.4 0-180.8 68.3-202.4 160H248c4.4 0 8 3.6 8 8s-3.6 8-8 8H66.4c-1.6 10.4-2.4 21.1-2.4 32s.8 21.6 2.4 32H248c4.4 0 8 3.6 8 8s-3.6 8-8 8H69.6c21.6 91.7 104 160 202.4 160h56c4.4 0 8 3.6 8 8s-3.6 8-8 8h-56c-107.2 0-196.9-75.4-218.8-176H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h42.3c-1.5-10.5-2.3-21.1-2.3-32s.8-21.5 2.3-32H8c-4.4 0-8-3.6-8-8s3.6-8 8-8z"})
);

export default LanEuroSignThin;
