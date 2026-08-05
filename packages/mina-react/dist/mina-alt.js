import React from 'react';

export function MinaAlt({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M3 5.25h5.625l6.75 13.5H21m-6.75-13.5H21"})
  );
}

export default MinaAlt;
