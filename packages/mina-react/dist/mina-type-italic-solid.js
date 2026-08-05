import React from 'react';

export function MinaTypeItalicSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M14.483 2.25H9a.75.75 0 0 0 0 1.5h4.54l-4.126 16.5H5a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5h-4.04l4.126-16.5H19a.75.75 0 0 0 0-1.5z"})
  );
}

export default MinaTypeItalicSolid;
