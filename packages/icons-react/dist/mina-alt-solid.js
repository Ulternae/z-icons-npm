import React from 'react';

export const MinaAltSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M3 4.25a1 1 0 0 0 0 2h5.007l6.474 12.947a1 1 0 0 0 .894.553H21a1 1 0 1 0 0-2h-5.007L9.519 4.803a1 1 0 0 0-.894-.553zm11.25 0a1 1 0 1 0 0 2H21a1 1 0 1 0 0-2z"})
);

export default MinaAltSolid;
