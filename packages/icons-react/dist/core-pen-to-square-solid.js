import React from 'react';

export const CorePenToSquareSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -35.888 516.35 547.888',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m345.8-6.6-208 208-9.4 9.4v141.3h141.3l9.4-9.4 208-208c39-39 39-102.2 0-141.3s-102.2-39-141.3 0M216.6 32H64.4C29 32 .4 60.7.4 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V263.8l-64 64V416h-320V96h88.2z"})
);

export default CorePenToSquareSolid;
