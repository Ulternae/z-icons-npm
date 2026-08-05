import React from 'react';

export function MinaDatabase({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M12 3C7.582 3 4 4.29 4 5.88c0 4.16 16 4.16 16 0C20 4.29 16.418 3 12 3m8 8.75c0 4.667-16 4.667-16 0"}), React.createElement("path", {"d":"M4 6v12.165c0 3.78 16 3.78 16 0V6"})
  );
}

export default MinaDatabase;
