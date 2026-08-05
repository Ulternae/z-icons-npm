import React from 'react';

export function MinaKeyboardBrightnessHigh({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M10 17h4M3 17h3m6-9v3m6 6h3m-4.879-4.28L18.58 11M7.457 12.72 5 11"})
  );
}

export default MinaKeyboardBrightnessHigh;
