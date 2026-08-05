import React from 'react';

export function MinaArrowDownLeft({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"m17.5 6.5-11 11m0 0h9m-9 0v-9"})
  );
}

export default MinaArrowDownLeft;
