import React from 'react';

export function MinaCocktail({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"m12 14.25 7.777-9.625C20.306 3.97 19.835 3 18.988 3H5.012c-.847 0-1.318.97-.789 1.625zm0 0V21M6.546 7.5h10.908M7.329 21h9.342"})
  );
}

export default MinaCocktail;
