import React from 'react';

export function MinaArrowDownLeftSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M15.5 18.25a.75.75 0 0 0 .75-.75l-4.345-4.345L18.03 7.03a.75.75 0 0 0-1.06-1.06l-6.125 6.125L6.5 7.75a.75.75 0 0 0-.75.75v9c0 .414.336.75.75.75z"})
  );
}

export default MinaArrowDownLeftSolid;
