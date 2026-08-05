import React from 'react';

export function MinaIndifferentCircle({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M9 15.5h6m-5.5-5V10m5 .5V10m6.5 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0"})
  );
}

export default MinaIndifferentCircle;
