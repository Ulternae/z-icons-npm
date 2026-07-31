import React from 'react';

export const MinaAlarmMinus = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M3 5.231 6.15 3M21 5.231 17.85 3M20 13a8 8 0 1 1-16 0 8 8 0 0 1 16 0M9.5 13h5"})
);

export default MinaAlarmMinus;
