import React from 'react';

export const MinaScissors = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M11.79 12 7 8.855m14-2.903L7 15.145M8 6.92c0 1.337-1.12 2.42-2.5 2.42S3 8.256 3 6.919 4.12 4.5 5.5 4.5 8 5.583 8 6.92m0 10.162c0-1.336-1.12-2.42-2.5-2.42S3 15.745 3 17.081 4.12 19.5 5.5 19.5 8 18.417 8 17.08m13 .968-6.066-3.983"})
);

export default MinaScissors;
