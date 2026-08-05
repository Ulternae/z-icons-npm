import React from 'react';

export function MinaKeyboardBrightnessLow({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M8 17h8M3 17h1m8-8v1m6 2.207.707-.707m-13 .707L5 11.5M20 17h1"})
  );
}

export default MinaKeyboardBrightnessLow;
