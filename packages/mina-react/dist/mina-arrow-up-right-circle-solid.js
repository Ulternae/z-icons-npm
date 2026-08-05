import React from 'react';

export function MinaArrowUpRightCircleSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M2.25 12c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12m7.232-3.182a.75.75 0 0 1 .75-.75h4.95a.75.75 0 0 1 .75.75v4.95a.75.75 0 1 1-1.5 0v-3.14l-5.084 5.084a.75.75 0 1 1-1.06-1.06l5.083-5.084h-3.139a.75.75 0 0 1-.75-.75"})
  );
}

export default MinaArrowUpRightCircleSolid;
