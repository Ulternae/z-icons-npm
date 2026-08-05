import React from 'react';

export function MinaArrowDownRightSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M8.5 18.25a.75.75 0 0 1-.75-.75l4.345-4.345L5.97 7.03a.75.75 0 0 1 1.06-1.06l6.125 6.125L17.5 7.75a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75z"})
  );
}

export default MinaArrowDownRightSolid;
