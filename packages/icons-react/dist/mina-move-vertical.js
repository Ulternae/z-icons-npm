import React from 'react';

export const MinaMoveVertical = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"m8 18 4 4m0 0 4-4m-4 4V2M8 6l4-4m0 0 4 4"})
);

export default MinaMoveVertical;
