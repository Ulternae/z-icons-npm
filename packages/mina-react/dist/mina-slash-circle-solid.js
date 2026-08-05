import React from 'react';

export function MinaSlashCircleSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M2.25 12c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12m13.28-2.47-6 6a.75.75 0 0 1-1.06-1.06l6-6a.75.75 0 1 1 1.06 1.06"})
  );
}

export default MinaSlashCircleSolid;
