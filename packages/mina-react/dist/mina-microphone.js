import React from 'react';

export function MinaMicrophone({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M16 6.429C16 4.535 14.21 3 12 3S8 4.535 8 6.429v5.142C8 13.465 9.79 15 12 15s4-1.535 4-3.429z"}), React.createElement("path", {"d":"M5 11a7 7 0 1 0 14 0m-7 7v3m-4 0h8"})
  );
}

export default MinaMicrophone;
