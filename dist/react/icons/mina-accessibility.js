import React from 'react';

export const MinaAccessibility = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0M8 9.5l4 .778m0 0 4-.778m-4 .778v2.333m0 0L10.4 16.5m1.6-3.889 1.6 3.889M12 7.25v.5"})
);

export default MinaAccessibility;
