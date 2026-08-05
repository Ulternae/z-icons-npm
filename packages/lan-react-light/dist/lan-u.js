import React from 'react';

export function LanU({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M16 32c8.8 0 16 7.2 16 16v240c0 88.4 71.6 160 160 160s160-71.6 160-160V48c0-8.8 7.2-16 16-16s16 7.2 16 16v240c0 106-86 192-192 192S0 394 0 288V48c0-8.8 7.2-16 16-16"})
  );
}

export default LanU;
