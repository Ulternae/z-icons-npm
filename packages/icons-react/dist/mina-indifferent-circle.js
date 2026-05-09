import React from 'react';

export const MinaIndifferentCircle = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M9 15.5h6m-5.5-5V10m5 .5V10m6.5 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0"})
);

export default MinaIndifferentCircle;
