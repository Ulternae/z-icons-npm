import React from 'react';

export const MinaChartPieTwo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M12 3a9 9 0 1 0 6.364 15.364M12 3a9 9 0 0 1 6.364 15.364M12 3v9l6.364 6.364"})
);

export default MinaChartPieTwo;
