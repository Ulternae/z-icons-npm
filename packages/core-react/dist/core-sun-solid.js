import React from 'react';

export function CoreSunSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 576 576',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M333.3 13.3 368 48h128v128l80 80-80 80v128H368l-80 80-80-80H80V336L0 256l80-80V48h128l80-80zM288 352a96 96 0 1 0 0-192 96 96 0 1 0 0 192"})
  );
}

export default CoreSunSolid;
