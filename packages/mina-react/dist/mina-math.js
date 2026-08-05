import React from 'react';

export function MinaMath({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M3.429 18.366h6M15 8.707h6m-6-4.39h6M3 6.512h3.429m0 0h3.428m-3.428 0V3m0 3.512v3.512M15.6 21l2.425-2.484m0 0 2.424-2.483m-2.424 2.483L15.6 16.033m2.425 2.483L20.449 21"})
  );
}

export default MinaMath;
