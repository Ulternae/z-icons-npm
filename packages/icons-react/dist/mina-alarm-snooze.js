import React from 'react';

export const MinaAlarmSnooze = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M3 5.231 6.15 3M21 5.231 17.85 3M20 13a8 8 0 1 1-16 0 8 8 0 0 1 16 0"}), React.createElement('path', {"d":"M10.75 11h2.5l-2.5 4h2.5"})
);

export default MinaAlarmSnooze;
