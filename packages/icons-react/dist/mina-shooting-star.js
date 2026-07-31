import React from 'react';

export const MinaShootingStar = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M12 5.647 9.353 3m.53 6.882L4.058 4.06M5.647 12 3 9.353m5.294 5.294 4.235-2.118 2.118-4.235 2.118 4.235L21 14.647l-4.235 2.118L14.647 21l-2.118-4.235z"})
);

export default MinaShootingStar;
