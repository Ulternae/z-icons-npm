import React from 'react';

export function MinaListSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M3.25 6.5A.75.75 0 0 1 4 5.75h1a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75m4 0A.75.75 0 0 1 8 5.75h12a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m-4 5.5a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m-4 5.5a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75"})
  );
}

export default MinaListSolid;
