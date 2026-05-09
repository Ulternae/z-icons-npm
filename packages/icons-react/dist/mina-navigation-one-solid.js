import React from 'react';

export const MinaNavigationOneSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M21.623 4.103c.521-1.1-.626-2.248-1.726-1.726L2.99 10.385c-1.1.52-.94 2.133.24 2.429l6.364 1.59 1.591 6.364c.295 1.18 1.908 1.34 2.43.24z"})
);

export default MinaNavigationOneSolid;
