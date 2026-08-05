import React from 'react';

export function MinaLetterE({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M15.25 7H9v5m6.25 5H9v-5m0 0h5"})
  );
}

export default MinaLetterE;
