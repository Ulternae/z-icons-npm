import React from 'react';

export const MinaLetterC = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M15.5 9.5v-.312C15.5 7.979 14.52 7 13.313 7H10.5A2.5 2.5 0 0 0 8 9.5v5a2.5 2.5 0 0 0 2.5 2.5h2.813c1.208 0 2.187-.98 2.187-2.187V14.5"})
);

export default MinaLetterC;
