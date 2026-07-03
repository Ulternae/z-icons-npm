import React from 'react';

export function BruFlutter({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"d":"M429.5 236.3 291.7 374.1 429.5 512H272l-59.1-59.1-78.8-78.8L272 236.3zM272 0 16 256l78.8 78.8L429.5 0z"})
  );
}

export default BruFlutter;
