import React from 'react';

export function Lan0({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 320 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 192C0 103.6 71.6 32 160 32s160 71.6 160 160v128c0 88.4-71.6 160-160 160S0 408.4 0 320zM160 64C89.3 64 32 121.3 32 192v128c0 70.7 57.3 128 128 128s128-57.3 128-128V192c0-70.7-57.3-128-128-128"})
  );
}

export default Lan0;
