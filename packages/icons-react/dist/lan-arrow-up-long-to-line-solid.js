import React from 'react';

export const LanArrowUpLongToLineSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M9.4 201.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l73.3-73.4V544c0 17.7 14.3 32 32 32s32-14.3 32-32V173.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0zM32-64C14.3-64 0-49.7 0-32S14.3 0 32 0h256c17.7 0 32-14.3 32-32s-14.3-32-32-32z"})
);

export default LanArrowUpLongToLineSolid;
