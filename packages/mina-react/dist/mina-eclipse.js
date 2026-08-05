import React from 'react';

export function MinaEclipse({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M10.183 3.183A9 9 0 0 0 3 12a9 9 0 0 0 17.817 1.817M10.183 3.183a9 9 0 0 1 10.633 10.633M10.184 3.184c-1.268 6.188 4.533 11.884 10.634 10.634"})
  );
}

export default MinaEclipse;
