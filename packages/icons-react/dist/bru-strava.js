import React from 'react';

export const BruStrava = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M158.4 0 7 292h89.2l62.2-116.1L220.1 292h88.5zm150.2 292-43.9 88.2-44.6-88.2h-67.6l112.2 220 111.5-220z"})
);

export default BruStrava;
