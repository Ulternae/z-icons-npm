import React from 'react';

export function MinaEight({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M11.875 12S15 12.625 15 14.5 13.6 17 11.875 17s-3.125-.625-3.125-2.5 3.125-2.5 3.125-2.5m0 0S15 11.375 15 9.5 13.6 7 11.875 7 8.75 7.625 8.75 9.5s3.125 2.5 3.125 2.5"})
  );
}

export default MinaEight;
