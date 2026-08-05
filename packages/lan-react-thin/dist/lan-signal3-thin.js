import React from 'react';

export function LanSignal3Thin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M232 232c0-4.4-3.6-8-8-8s-8 3.6-8 8v240c0 4.4 3.6 8 8 8s8-3.6 8-8zm-112 88c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8s8-3.6 8-8V328c0-4.4-3.6-8-8-8M8 384c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8s8-3.6 8-8v-80c0-4.4-3.6-8-8-8"})
  );
}

export default LanSignal3Thin;
