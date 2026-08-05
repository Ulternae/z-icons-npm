import React from 'react';

export function MinaMoveDiagonalOneSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M11 4.25a.75.75 0 0 1 .75.75L8.905 7.845l7.25 7.25L19 12.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75l2.845-2.845-7.25-7.25L5 11.75a.75.75 0 0 1-.75-.75V5A.75.75 0 0 1 5 4.25z"})
  );
}

export default MinaMoveDiagonalOneSolid;
