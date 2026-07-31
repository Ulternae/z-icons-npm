import React from 'react';

export const MinaCircleNotch = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M7.717 4A9.05 9.05 0 0 0 3 11.956C3 16.951 7.03 21 12 21s9-4.05 9-9.044A9.05 9.05 0 0 0 16.283 4"})
);

export default MinaCircleNotch;
