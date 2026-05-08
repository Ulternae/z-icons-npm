import React from 'react';

export const MinaChartNoAxesGantt = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M5 14h11m-7-4h11M7 18h11M6 6h11"})
);

export default MinaChartNoAxesGantt;
