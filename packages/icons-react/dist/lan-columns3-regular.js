import React from 'react';

export const LanColumns3Regular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M320 80v352h64c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zm-48 0h-96v352h96zM128 432V80H64c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"})
);

export default LanColumns3Regular;
