import React from 'react';

export function MinaTablet({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M17.714 3H6.286C5.023 3 4 3.806 4 4.8v14.4c0 .994 1.023 1.8 2.286 1.8h11.428C18.977 21 20 20.194 20 19.2V4.8c0-.994-1.023-1.8-2.286-1.8M10.5 6h3"})
  );
}

export default MinaTablet;
