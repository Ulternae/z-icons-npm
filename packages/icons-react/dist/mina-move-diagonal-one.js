import React from 'react';

export const MinaMoveDiagonalOne = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M5 11V5m0 0h6M5 5l14 14m0-6v6m0 0h-6"})
);

export default MinaMoveDiagonalOne;
