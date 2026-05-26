import React from 'react';

export const LanKeyboardBrightnessLowSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64M96 256a32 32 0 1 0 0-64 32 32 0 1 0 0 64m352-32a32 32 0 1 0-64 0 32 32 0 1 0 64 0m32 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64M64 384a32 32 0 1 0-64 0 32 32 0 1 0 64 0m96-32c-17.7 0-32 14.3-32 32s14.3 32 32 32h192c17.7 0 32-14.3 32-32s-14.3-32-32-32z"})
);

export default LanKeyboardBrightnessLowSolid;
