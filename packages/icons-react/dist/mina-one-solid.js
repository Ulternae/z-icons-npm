import React from 'react';

export const MinaOneSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M12.778 6.332a.75.75 0 0 1 .41.668v10a.75.75 0 0 1-1.5 0V8.473L9.44 10.107a.75.75 0 0 1-.882-1.214l3.437-2.5a.75.75 0 0 1 .782-.061"})
);

export default MinaOneSolid;
