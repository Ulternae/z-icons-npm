import React from 'react';

export function MinaBrandCodesandbox({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M18 6H6v12h12z"})
  );
}

export default MinaBrandCodesandbox;
