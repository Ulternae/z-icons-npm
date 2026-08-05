import React from 'react';

export function LanSignalAlt3Thin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M304 136c0-4.4-3.6-8-8-8s-8 3.6-8 8v336c0 4.4 3.6 8 8 8s8-3.6 8-8zM152 256c-4.4 0-8 3.6-8 8v208c0 4.4 3.6 8 8 8s8-3.6 8-8V264c0-4.4-3.6-8-8-8M8 384c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8s8-3.6 8-8v-80c0-4.4-3.6-8-8-8"})
  );
}

export default LanSignalAlt3Thin;
