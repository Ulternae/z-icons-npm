import React from 'react';

export const LanNotEqualThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M382.5 44.6c2.5-3.6 1.7-8.6-1.9-11.1s-8.6-1.7-11.1 1.9L304.3 128H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h285L135.4 368H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h116.1l-58.7 83.4c-2.5 3.6-1.7 8.6 1.9 11.1s8.6 1.7 11.1-1.9l65.3-92.6H440c4.4 0 8-3.6 8-8s-3.6-8-8-8H155l157.6-224H440c4.4 0 8-3.6 8-8s-3.6-8-8-8H323.9l58.7-83.4z"})
);

export default LanNotEqualThin;
