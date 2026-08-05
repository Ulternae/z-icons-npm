import React from 'react';

export function MinaRibbon({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M18 9A6 6 0 1 1 6 9a6 6 0 0 1 12 0"}), React.createElement("path", {"d":"m8 13.472-1 6.44c0 .81 1.782 1.336 2.447.974l2.106-1.147a.93.93 0 0 1 .894 0l2.106 1.147c.665.362 2.447-.165 2.447-.975l-1-6.439"})
  );
}

export default MinaRibbon;
