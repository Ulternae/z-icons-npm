import React from 'react';

export const LanTally3Thin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M32 32c4.4 0 8 3.6 8 8v432c0 4.4-3.6 8-8 8s-8-3.6-8-8V40c0-4.4 3.6-8 8-8m128 0c4.4 0 8 3.6 8 8v432c0 4.4-3.6 8-8 8s-8-3.6-8-8V40c0-4.4 3.6-8 8-8m136 8v432c0 4.4-3.6 8-8 8s-8-3.6-8-8V40c0-4.4 3.6-8 8-8s8 3.6 8 8"})
);

export default LanTally3Thin;
