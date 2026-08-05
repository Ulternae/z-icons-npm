import React from 'react';

export function MinaSunrise({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M15.5 17.5a3.5 3.5 0 1 0-7 0M11.9 3v7m-6.002 1.398 1.278 1.278M3 17.4h1.8m14.2 0h1.8m-4.176-4.724 1.278-1.278M21 21H3M8.3 6.6 11.9 3l3.6 3.6"})
  );
}

export default MinaSunrise;
