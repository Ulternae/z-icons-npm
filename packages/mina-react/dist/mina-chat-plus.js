import React from 'react';

export function MinaChatPlus({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M9.5 12h5M12 9.5v5m0 6.5a9 9 0 1 0-9-9c0 1.44.338 2.8.94 4.007.453.911-.177 2.14-.417 3.037a1.17 1.17 0 0 0 1.433 1.433c.897-.24 2.126-.87 3.037-.416A9 9 0 0 0 12 21"})
  );
}

export default MinaChatPlus;
