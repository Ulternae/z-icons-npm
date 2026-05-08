import React from 'react';

export const MinaChevronUpRightSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M6.886 7.879a.75.75 0 0 1 .75-.75h8.485a.75.75 0 0 1 .75.75v8.485a.75.75 0 0 1-.75.75z"})
);

export default MinaChevronUpRightSolid;
