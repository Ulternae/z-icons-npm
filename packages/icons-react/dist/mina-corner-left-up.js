import React from 'react';

export const MinaCornerLeftUp = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M10.027 5v10a4 4 0 0 0 4 4H19M10.027 5l5.028 4.78M10.027 5 5 9.78"})
);

export default MinaCornerLeftUp;
