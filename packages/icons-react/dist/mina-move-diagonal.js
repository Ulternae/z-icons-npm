import React from 'react';

export const MinaMoveDiagonal = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M13 5h6m0 0v6m0-6L5 19m6 0H5m0 0v-6"})
);

export default MinaMoveDiagonal;
