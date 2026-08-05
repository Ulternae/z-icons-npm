import React from 'react';

export function MinaClockSix({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M12 6v10.5m9-4.5a9 9 0 1 1-18 0 9 9 0 0 1 18 0"})
  );
}

export default MinaClockSix;
