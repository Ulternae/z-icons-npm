import React from 'react';

export const MinaWifiMinus = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M2 9.483A14.5 14.5 0 0 1 12 5.5m7 7.4c-3.866-3.867-10.134-3.867-14 0M15.5 6h5M16 16.157a5.657 5.657 0 0 0-8 0m4 3.093v-.5"})
);

export default MinaWifiMinus;
