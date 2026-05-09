import React from 'react';

export const MinaChartLine = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M21 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6V3"}), React.createElement('path', {"d":"m3 15.5 3.857-3.213c1.634-1.362 2.708-1.222 4.119.189l.006.006c1.538 1.538 2.64 1.474 4.172.133L21 7.5"})
);

export default MinaChartLine;
