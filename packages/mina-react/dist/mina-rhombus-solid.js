import React from 'react';

export function MinaRhombusSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M13.42 2.964a1.77 1.77 0 0 0-2.84 0L4.62 10.89a1.85 1.85 0 0 0 0 2.222l5.96 7.925a1.77 1.77 0 0 0 2.84 0l5.96-7.925a1.85 1.85 0 0 0 0-2.222z"})
  );
}

export default MinaRhombusSolid;
