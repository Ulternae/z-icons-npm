import React from 'react';

export const LanSquareHalfStrokeThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M232 48v416h152c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zm-16 0H64c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h152zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"})
);

export default LanSquareHalfStrokeThin;
