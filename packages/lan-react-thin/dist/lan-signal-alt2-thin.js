import React from 'react';

export function LanSignalAlt2Thin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M160 264c0-4.4-3.6-8-8-8s-8 3.6-8 8v208c0 4.4 3.6 8 8 8s8-3.6 8-8zM16 392c0-4.4-3.6-8-8-8s-8 3.6-8 8v80c0 4.4 3.6 8 8 8s8-3.6 8-8z"})
  );
}

export default LanSignalAlt2Thin;
