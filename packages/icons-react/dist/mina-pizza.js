import React from 'react';

export const MinaPizza = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M6.234 16.925a15.98 15.98 0 0 1 10.69-10.691M7.582 7.58a18.76 18.76 0 0 1 7.33-4.53c.536-.18 1.103.136 1.265.678l4.779 15.928a1.042 1.042 0 0 1-1.298 1.298L3.73 16.176c-.542-.162-.858-.729-.679-1.266a18.76 18.76 0 0 1 4.53-7.33M11 15l.354.354M15 11l.354.354M16 16l.354.354"})
);

export default MinaPizza;
