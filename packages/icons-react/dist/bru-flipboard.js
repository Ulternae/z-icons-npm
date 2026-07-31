import React from 'react';

export const BruFlipboard = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M0 32v448h448V32zm358.4 179.2h-89.6v89.6h-89.6v89.6H89.6V121.6h268.8z"})
);

export default BruFlipboard;
