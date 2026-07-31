import React from 'react';

export const LanWindowAltRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M464 384V256H48v128c0 8.8 7.2 16 16 16h384c8.8 0 16-7.2 16-16M448 64c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64zm-32 128a32 32 0 1 0 0-64 32 32 0 1 0 0 64m-128-32a32 32 0 1 0 64 0 32 32 0 1 0-64 0m-64 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64"})
);

export default LanWindowAltRegular;
