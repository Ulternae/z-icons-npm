import React from 'react';

export const LanSquareHalfStroke = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M240 64v384h144c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-32 0H64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h144zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"})
);

export default LanSquareHalfStroke;
