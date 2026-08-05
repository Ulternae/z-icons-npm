import React from 'react';

export function MinaHeading({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M7.25 4.5v15m9.5-15v15M7.25 12h9.5"})
  );
}

export default MinaHeading;
