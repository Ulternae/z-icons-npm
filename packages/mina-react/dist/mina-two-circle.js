import React from 'react';

export function MinaTwoCircle({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"}), React.createElement("path", {"d":"M9.5 10.337c0-3.116 4.615-3.116 4.615 0 0 2.352-3.015 4.38-4.615 5.663 0 0 3-.5 5 0"})
  );
}

export default MinaTwoCircle;
