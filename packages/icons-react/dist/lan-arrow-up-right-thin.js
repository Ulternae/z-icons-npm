import React from 'react';

export const LanArrowUpRightThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M376 64c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8s-8-3.6-8-8V91.3L13.7 445.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L356.7 80H104c-4.4 0-8-3.6-8-8s3.6-8 8-8z"})
);

export default LanArrowUpRightThin;
