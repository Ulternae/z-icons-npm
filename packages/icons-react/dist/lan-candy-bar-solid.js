import React from 'react';

export const LanCandyBarSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M192 416h128V280H192zm176 0h208c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H368zM320 96H192v136h128zm-176 0h-32c0 61.9-50.1 112-112 112v24h144zM0 280v72c0 35.3 28.7 64 64 64h80V280z"})
);

export default LanCandyBarSolid;
