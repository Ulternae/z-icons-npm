import React from 'react';

export const LanSquareEllipsisThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M16 416c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48H64c-26.5 0-48 21.5-48 48zm48 64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64zm144-224a16 16 0 1 1 32 0 16 16 0 1 1-32 0m-80 16a16 16 0 1 1 0-32 16 16 0 1 1 0 32m176-16a16 16 0 1 1 32 0 16 16 0 1 1-32 0"})
);

export default LanSquareEllipsisThin;
