import React from 'react';

export const MinaTagSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M4.472 4.75c-.597 0-1.293.166-1.862.519-.58.358-1.11.974-1.11 1.856v9.75c0 .882.53 1.497 1.11 1.856.57.353 1.265.519 1.862.519H14.77a2.75 2.75 0 0 0 1.92-.781l5.35-5.216a1.75 1.75 0 0 0 0-2.506l-5.35-5.216a2.75 2.75 0 0 0-1.92-.781z"})
);

export default MinaTagSolid;
