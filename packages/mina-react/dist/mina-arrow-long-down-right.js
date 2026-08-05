import React from 'react';

export function MinaArrowLongDownRight({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M19 13v6m0 0h-6m6 0L5 5"})
  );
}

export default MinaArrowLongDownRight;
