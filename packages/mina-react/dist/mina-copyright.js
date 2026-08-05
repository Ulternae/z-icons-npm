import React from 'react';

export function MinaCopyright({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"}), React.createElement("path", {"d":"M14 9c-.48-.6-1.07-1-2-1-4.172 0-4.172 8 0 8 .93 0 1.52-.4 2-1"})
  );
}

export default MinaCopyright;
