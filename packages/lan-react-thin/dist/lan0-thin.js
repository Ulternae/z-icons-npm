import React from 'react';

export function Lan0Thin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 320 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 192C0 103.6 71.6 32 160 32s160 71.6 160 160v128c0 88.4-71.6 160-160 160S0 408.4 0 320zM160 48C80.5 48 16 112.5 16 192v128c0 79.5 64.5 144 144 144s144-64.5 144-144V192c0-79.5-64.5-144-144-144"})
  );
}

export default Lan0Thin;
