import React from 'react';

export const LanArrowDownLeftAndArrowUpRightToCenterSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M502.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L336 130.7V80c0-17.7-14.3-32-32-32s-32 14.3-32 32v128c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32s-14.3-32-32-32h-50.7L502.7 54.6zM80 272c-17.7 0-32 14.3-32 32s14.3 32 32 32h50.7L9.3 457.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L176 381.3V432c0 17.7 14.3 32 32 32s32-14.3 32-32V304c0-17.7-14.3-32-32-32z"})
);

export default LanArrowDownLeftAndArrowUpRightToCenterSolid;
