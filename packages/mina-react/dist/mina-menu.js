import React from 'react';

export function MinaMenu({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M4.5 6.5h15M4.5 12h15m-15 5.5h15"})
  );
}

export default MinaMenu;
