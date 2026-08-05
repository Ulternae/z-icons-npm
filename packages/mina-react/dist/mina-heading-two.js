import React from 'react';

export function MinaHeadingTwo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M16 11.939c0-3.252 5-3.252 5 0 0 2.873-5 5.007-5 7.561h5M3.75 4.5v15m9.5-15v15M3.75 12h9.5"})
  );
}

export default MinaHeadingTwo;
