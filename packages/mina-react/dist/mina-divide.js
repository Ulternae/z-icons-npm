import React from 'react';

export function MinaDivide({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M3 12h18m-9-6.256V5m0 14v-.744"})
  );
}

export default MinaDivide;
