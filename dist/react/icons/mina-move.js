import React from 'react';

export const MinaMove = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M5.7 9.3 3 12m0 0 2.7 2.7M3 12h18M9.3 5.7 12 3m0 0 2.7 2.7M12 3v18m2.7-2.7L12 21m0 0-2.7-2.7m9-9L21 12m0 0-2.7 2.7"})
);

export default MinaMove;
