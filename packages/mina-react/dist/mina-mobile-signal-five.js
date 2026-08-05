import React from 'react';

export function MinaMobileSignalFive({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M3 21v-1m18 1V3m-9 18v-9m4.5 9V8m-9 13v-5"})
  );
}

export default MinaMobileSignalFive;
