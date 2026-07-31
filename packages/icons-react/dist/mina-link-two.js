import React from 'react';

export const MinaLinkTwo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M14 15.5h3.4c1.988 0 3.6-1.567 3.6-3.5s-1.612-3.5-3.6-3.5H14m-4 7-3.397-.007c-1.987-.003-3.647-1.426-3.602-3.502S4.607 8.497 6.594 8.5l3.397.007M7.757 12h8.486"})
);

export default MinaLinkTwo;
