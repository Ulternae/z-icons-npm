import React from 'react';

export const MinaLetterVSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M8.936 6.649a1 1 0 0 0-1.872.702l3.75 10a1 1 0 0 0 1.872 0l3.75-10a1 1 0 0 0-1.872-.702l-2.814 7.503z"})
);

export default MinaLetterVSolid;
