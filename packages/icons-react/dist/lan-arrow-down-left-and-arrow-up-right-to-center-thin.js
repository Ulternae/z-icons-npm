import React from 'react';

export const LanArrowDownLeftAndArrowUpRightToCenterThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M456 224c4.4 0 8-3.6 8-8s-3.6-8-8-8H315.3L509.7 13.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L304 196.7V56c0-4.4-3.6-8-8-8s-8 3.6-8 8v160c0 4.4 3.6 8 8 8zM56 288c-4.4 0-8 3.6-8 8s3.6 8 8 8h140.7L2.3 498.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L208 315.3V456c0 4.4 3.6 8 8 8s8-3.6 8-8V296c0-4.4-3.6-8-8-8z"})
);

export default LanArrowDownLeftAndArrowUpRightToCenterThin;
