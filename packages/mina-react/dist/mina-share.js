import React from 'react';

export function MinaShare({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M9.5 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m5-5.5-5 3.5m5 7.5-5-3.5m10 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m0-13a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"})
  );
}

export default MinaShare;
