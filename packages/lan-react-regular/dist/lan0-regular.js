import React from 'react';

export function Lan0Regular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 320 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 192C0 103.6 71.6 32 160 32s160 71.6 160 160v128c0 88.4-71.6 160-160 160S0 408.4 0 320zM160 80C98.1 80 48 130.1 48 192v128c0 61.9 50.1 112 112 112s112-50.1 112-112V192c0-61.9-50.1-112-112-112"})
  );
}

export default Lan0Regular;
