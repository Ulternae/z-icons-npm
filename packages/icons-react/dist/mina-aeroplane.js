import React from 'react';

export const MinaAeroplane = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"m14.134 6.992 3.396-3.397a2.033 2.033 0 0 1 2.875 2.875l-3.397 3.396 1.838 9.145c.235 1.17-2.034 2.8-2.638 1.25l-2.69-6.904-3.493 3.493c.17 2.041.207 2.72-1.224 4.15l-2.175-3.626L3 15.199c1.43-1.431 2.109-1.395 4.15-1.224l3.493-3.492-6.904-2.691c-1.55-.604.08-2.874 1.25-2.638z"})
);

export default MinaAeroplane;
