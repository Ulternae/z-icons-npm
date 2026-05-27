import React from 'react';

export const CoreArrowUpArrowDownRegularDuo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M438.9 470.6c76.2-76.2 115.8-115.7 118.6-118.6l-45.3-45.3-64 64V32h-64v338.7l-64-64-45.3 45.3 118.6 118.6c6 6 14.1 9.4 22.6 9.4s16.6-3.4 22.6-9.4zm-256-429.2c-12.5-12.5-32.8-12.5-45.3 0L19 160l45.3 45.3 64-64V480h64V141.3l64 64 45.2-45.3z"})
);

export default CoreArrowUpArrowDownRegularDuo;
