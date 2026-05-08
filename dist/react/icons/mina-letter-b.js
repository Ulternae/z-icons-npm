import React from 'react';

export const MinaLetterB = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M9 12V7h4.589c2.74 0 3.124 4.072.57 5M9 12v5h4.589c2.74 0 3.124-4.072.57-5M9 12h5.158"})
);

export default MinaLetterB;
