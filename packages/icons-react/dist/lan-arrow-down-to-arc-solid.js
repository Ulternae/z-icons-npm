import React from 'react';

export const LanArrowDownToArcSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 448c106 0 192-86 192-192 0-17.7 14.3-32 32-32s32 14.3 32 32c0 141.4-114.6 256-256 256S0 397.4 0 256c0-17.7 14.3-32 32-32s32 14.3 32 32c0 106 86 192 192 192m22.6-105.4c-12.5 12.5-32.8 12.5-45.3 0l-96-96c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l41.4 41.4V32c0-17.7 14.3-32 32-32s32 14.3 32 32v210.7l41.4-41.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-96 96z"})
);

export default LanArrowDownToArcSolid;
