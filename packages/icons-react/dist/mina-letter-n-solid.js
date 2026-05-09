import React from 'react';

export const MinaLetterNSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M8.8 6.4A1 1 0 0 0 7 7v10a1 1 0 1 0 2 0v-7l5.7 7.6a1 1 0 0 0 1.8-.6V7a1 1 0 1 0-2 0v7z"})
);

export default MinaLetterNSolid;
