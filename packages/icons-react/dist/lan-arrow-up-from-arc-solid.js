import React from 'react';

export const LanArrowUpFromArcSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 448c-106 0-192-86-192-192 0-17.7-14.3-32-32-32S0 238.3 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 106-86 192-192 192M121.4 121.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l57.3-57.4V320c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0z"})
);

export default LanArrowUpFromArcSolid;
