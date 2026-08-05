import React from 'react';

export function MinaMoveDiagonalSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M13 4.25a.75.75 0 0 0-.75.75l2.845 2.845-7.25 7.25L5 12.25a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h6a.75.75 0 0 0 .75-.75l-2.845-2.845 7.25-7.25L19 11.75a.75.75 0 0 0 .75-.75V5a.75.75 0 0 0-.75-.75z"})
  );
}

export default MinaMoveDiagonalSolid;
