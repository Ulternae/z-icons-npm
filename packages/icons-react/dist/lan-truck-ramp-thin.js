import React from 'react';

export const LanTruckRampThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M320 96c0-35.3 28.7-64 64-64h192v16H384c-26.5 0-48 21.5-48 48v304h67.3c10.4-36.9 44.4-64 84.7-64 48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88c0-2.7.1-5.4.4-8h-71.2L10.3 511.7c-4.2 1.3-8.7-1.1-10-5.4s1.1-8.7 5.4-10L320 402zm168 400a72 72 0 1 0 0-144 72 72 0 1 0 0 144"})
);

export default LanTruckRampThin;
