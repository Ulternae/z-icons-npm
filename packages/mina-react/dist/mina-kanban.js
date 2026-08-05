import React from 'react';

export function MinaKanban({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M6 5v8m6-8v13.5M18 5v9"})
  );
}

export default MinaKanban;
