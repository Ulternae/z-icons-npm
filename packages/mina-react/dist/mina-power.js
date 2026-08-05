import React from 'react';

export function MinaPower({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M17.953 5.25a9 9 0 1 1-11.906 0M12 3v9"})
  );
}

export default MinaPower;
