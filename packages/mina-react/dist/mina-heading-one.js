import React from 'react';

export function MinaHeadingOne({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M3.75 4.5v15m9.5-15v15M3.75 12h9.5m3.25-.125 3-2.375v10"})
  );
}

export default MinaHeadingOne;
