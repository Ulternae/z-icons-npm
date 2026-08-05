import React from 'react';

export function LanJThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 320 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M312 32c4.4 0 8 3.6 8 8v280c0 88.4-71.6 160-160 160S0 408.4 0 320v-56c0-4.4 3.6-8 8-8s8 3.6 8 8v56c0 79.5 64.5 144 144 144s144-64.5 144-144V40c0-4.4 3.6-8 8-8"})
  );
}

export default LanJThin;
