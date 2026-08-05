import React from 'react';

export function MinaCornerUpRight({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M19 10.027H9a4 4 0 0 0-4 4V19m14-8.973-4.78 5.028M19 10.027 14.22 5"})
  );
}

export default MinaCornerUpRight;
