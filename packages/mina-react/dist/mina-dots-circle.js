import React from 'react';

export function MinaDotsCircle({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0m-9 .25v-.5m4 .5v-.5m-8 .5v-.5"})
  );
}

export default MinaDotsCircle;
