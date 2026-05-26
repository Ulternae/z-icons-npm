import React from 'react';

export const LanArrowDownLeftThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M8 448c-4.4 0-8-3.6-8-8V168c0-4.4 3.6-8 8-8s8 3.6 8 8v252.7L370.3 66.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3L27.3 432H280c4.4 0 8 3.6 8 8s-3.6 8-8 8z"})
);

export default LanArrowDownLeftThin;
