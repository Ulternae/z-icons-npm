import React from 'react';

export const MinaFile = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M9.728 3H7.5a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h9a2.25 2.25 0 0 0 2.25-2.25V12M9.728 3C10.971 3 12 4.007 12 5.25V7.5a2.25 2.25 0 0 0 2.25 2.25h2.25A2.25 2.25 0 0 1 18.75 12M9.728 3c3.69 0 9.022 5.36 9.022 9"})
);

export default MinaFile;
