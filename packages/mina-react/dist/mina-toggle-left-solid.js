import React from 'react';

export function MinaToggleLeftSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M2.25 12A5.75 5.75 0 0 1 8 6.25h8a5.75 5.75 0 0 1 0 11.5H8A5.75 5.75 0 0 1 2.25 12m2.5 0a3.25 3.25 0 1 0 6.5 0 3.25 3.25 0 0 0-6.5 0"})
  );
}

export default MinaToggleLeftSolid;
