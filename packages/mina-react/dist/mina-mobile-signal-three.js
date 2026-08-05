import React from 'react';

export function MinaMobileSignalThree({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M3 21v-1m9 1v-9m-4.5 9v-5"})
  );
}

export default MinaMobileSignalThree;
