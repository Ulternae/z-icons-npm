import React from 'react';

export const LanArrowDownFromBracketSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M384 160c0 17.7 14.3 32 32 32s32-14.3 32-32V96c0-53-43-96-96-96H96C43 0 0 43 0 96v64c0 17.7 14.3 32 32 32s32-14.3 32-32V96c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32zM201.4 502.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 402.7V192c0-17.7-14.3-32-32-32s-32 14.3-32 32v210.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z"})
);

export default LanArrowDownFromBracketSolid;
