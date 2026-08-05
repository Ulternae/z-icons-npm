import React from 'react';

export function MinaMoveDiagonal({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M13 5h6m0 0v6m0-6L5 19m6 0H5m0 0v-6"})
  );
}

export default MinaMoveDiagonal;
