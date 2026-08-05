import React from 'react';

export function MinaLayersThree({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"m21 12-9 4-9-4m18 4-9 4-9-4m18-8-9 4-9-4 9-4z"})
  );
}

export default MinaLayersThree;
