import React from 'react';

export function MinaHash({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M9.697 4 6.678 21M17.054 4l-3.019 17M21 8.781H3m18 7.438H3"})
  );
}

export default MinaHash;
