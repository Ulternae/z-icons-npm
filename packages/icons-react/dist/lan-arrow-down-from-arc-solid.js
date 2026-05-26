import React from 'react';

export const LanArrowDownFromArcSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 64C150 64 64 150 64 256c0 17.7-14.3 32-32 32S0 273.7 0 256C0 114.6 114.6 0 256 0s256 114.6 256 256c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-106-86-192-192-192M121.4 390.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l57.3 57.4V192c0-17.7 14.3-32 32-32s32 14.3 32 32v210.7l57.4-57.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-112 112c-12.5 12.5-32.8 12.5-45.3 0z"})
);

export default LanArrowDownFromArcSolid;
