import React from 'react';

export const LanUserMinusThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M304 304c97.2 0 176 78.8 176 176v24c0 4.4-3.6 8-8 8s-8-3.6-8-8v-24c0-88.4-71.6-160-160-160h-96c-88.4 0-160 71.6-160 160v24c0 4.4-3.6 8-8 8s-8-3.6-8-8v-24c0-97.2 78.8-176 176-176zm-48-48a128 128 0 1 1 0-256 128 128 0 1 1 0 256m0-240a112 112 0 1 0 0 224 112 112 0 1 0 0-224m360 152c4.4 0 8 3.6 8 8s-3.6 8-8 8H440c-4.4 0-8-3.6-8-8s3.6-8 8-8z"})
);

export default LanUserMinusThin;
