import React from 'react';

export const MinaRecordSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M10.75 12.5a4.23 4.23 0 0 1-1.01 2.75h4.52a4.25 4.25 0 1 1 3.24 1.5h-11a4.25 4.25 0 1 1 4.25-4.25"})
);

export default MinaRecordSolid;
