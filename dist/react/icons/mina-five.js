import React from 'react';

export const MinaFive = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M14.375 7c-2.5.625-5.625 0-5.625 0v3.566h3.473c1.534 0 2.777 1.064 2.777 2.377v1.399c0 3.522-6.25 3.566-6.25 0"})
);

export default MinaFive;
