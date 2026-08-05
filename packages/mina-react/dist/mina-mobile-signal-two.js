import React from 'react';

export function MinaMobileSignalTwo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M3 21v-1m4.5 1v-5"})
  );
}

export default MinaMobileSignalTwo;
