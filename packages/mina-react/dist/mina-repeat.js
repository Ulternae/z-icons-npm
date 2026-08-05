import React from 'react';

export function MinaRepeat({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"m17 3 4 3-4 3"}), React.createElement("path", {"d":"M3 12v-2a4 4 0 0 1 4-4h14M7 21l-4-3 4-3"}), React.createElement("path", {"d":"M21 12v2a4 4 0 0 1-4 4H3"})
  );
}

export default MinaRepeat;
