import React from 'react';

export function MinaFilter({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M4.5 7h15M7 12h10m-7 5h4"})
  );
}

export default MinaFilter;
