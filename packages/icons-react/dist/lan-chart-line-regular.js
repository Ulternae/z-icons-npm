import React from 'react';

export const LanChartLineRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M48 56c0-13.3-10.7-24-24-24S0 42.7 0 56v344c0 44.2 35.8 80 80 80h408c13.3 0 24-10.7 24-24s-10.7-24-24-24H80c-17.7 0-32-14.3-32-32zm425 113c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-119 119-79-79c-9.4-9.4-24.6-9.4-33.9 0L103 279c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l87-87 79 79c9.4 9.4 24.6 9.4 33.9 0z"})
);

export default LanChartLineRegular;
