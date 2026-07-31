import React from 'react';

export const LanArrowRightToDottedLineSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M480 448a32 32 0 1 0 0-64 32 32 0 1 0 0 64M374.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l73.4 73.4H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h242.7l-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM512 309.3a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-32-74.7a32 32 0 1 0 0-64 32 32 0 1 0 0 64M512 96a32 32 0 1 0-64 0 32 32 0 1 0 64 0"})
);

export default LanArrowRightToDottedLineSolid;
