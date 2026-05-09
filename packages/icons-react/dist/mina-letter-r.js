import React from 'react';

export const MinaLetterR = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M9 12V7.625C9 7.28 9.28 7 9.625 7h3.75c1.036 0 1.875.84 1.875 1.875v1.25c0 1.036-.84 1.875-1.875 1.875h-2.187M9 12v5m0-5h2.188m0 0 3.75 5"})
);

export default MinaLetterR;
