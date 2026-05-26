import React from 'react';

export const LanArrowDownFromLineSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M32 64C14.3 64 0 49.7 0 32S14.3 0 32 0h320c17.7 0 32 14.3 32 32s-14.3 32-32 32zm310.6 310.6-128 128c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l73.4 73.4V160c0-17.7 14.3-32 32-32s32 14.3 32 32v242.7l73.4-73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"})
);

export default LanArrowDownFromLineSolid;
