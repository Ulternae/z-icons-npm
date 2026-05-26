import React from 'react';

export const LanArrowDownToBracketSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m374.6 214.6-128 128c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l73.4 73.4V32c0-17.7 14.3-32 32-32s32 14.3 32 32v210.7l73.4-73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3zM64 352v64c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32v-64c0-17.7 14.3-32 32-32s32 14.3 32 32v64c0 53-43 96-96 96H96c-53 0-96-43-96-96v-64c0-17.7 14.3-32 32-32s32 14.3 32 32"})
);

export default LanArrowDownToBracketSolid;
