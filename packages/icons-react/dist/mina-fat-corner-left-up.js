import React from 'react';

export const MinaFatCornerLeftUp = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M19.923 21q-4.216-3.303-4.785-5.866-.569-2.564-.172-4.88H20L11.786 3 4 10.253h4.784Q8.82 14.54 12 17.54T19.923 21"})
);

export default MinaFatCornerLeftUp;
