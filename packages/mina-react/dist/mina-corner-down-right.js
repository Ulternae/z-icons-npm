import React from 'react';

export function MinaCornerDownRight({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M19 13.973H9a4 4 0 0 1-4-4V5m14 8.973-4.78-5.027M19 13.973 14.22 19"})
  );
}

export default MinaCornerDownRight;
