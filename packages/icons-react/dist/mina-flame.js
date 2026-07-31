import React from 'react';

export const MinaFlame = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M18.567 15.969c-1.064 2.66-3.58 4.531-6.513 4.531C8.158 20.5 5 17.202 5 13.133 5 9.065 6.482 7.401 8.798 3.5 13.14 5.483 13 13 13 13s1.565-4.436 4.48-5.817c.935 2.873 2.195 6.012 1.087 8.786"})
);

export default MinaFlame;
