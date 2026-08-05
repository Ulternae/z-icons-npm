import React from 'react';

export function MinaHashCircle({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0M10.905 8l-1.437 8m4.937-8-1.437 8m3.314-5.75H7.718m8.564 3.5H7.718"})
  );
}

export default MinaHashCircle;
