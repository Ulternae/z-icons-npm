import React from 'react';

export const LanCandyCaneSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32.16 448.376 552.21',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M421.8 39.6C452 85.2 456.5 142.9 435.1 192H269.7l41.4-41.4c.8-.8 1.5-1.6 2.2-2.4zM268 102.9c-.8.7-1.6 1.4-2.4 2.2l-28.1 28.1c-25 25-65.5 25-90.5 0s-25-65.5 0-90.5l28-28.1c54.9-54.8 139.5-61.3 201.5-20.2zM125.7 336l80-80h181l-82.5 82.5V336zm117 64L141.4 501.3c-25 25-65.5 25-90.5 0s-25-65.5 0-90.5l10.7-10.7h181z"})
);

export default LanCandyCaneSolid;
