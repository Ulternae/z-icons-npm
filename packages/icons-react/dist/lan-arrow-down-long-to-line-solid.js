import React from 'react';

export const LanArrowDownLongToLineSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M9.4 310.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l73.3 73.4V-32c0-17.7 14.3-32 32-32s32 14.3 32 32v370.7l73.4-73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-128 128c-12.5 12.5-32.8 12.5-45.3 0zM32 576c-17.7 0-32-14.3-32-32s14.3-32 32-32h256c17.7 0 32 14.3 32 32s-14.3 32-32 32z"})
);

export default LanArrowDownLongToLineSolid;
