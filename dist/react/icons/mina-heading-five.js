import React from 'react';

export const MinaHeadingFive = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M3.75 4.5v15m9.5-15v15M3.75 12h9.5m7.25-2.5c-2 .625-4.5 0-4.5 0v3.566h2.778c1.227 0 2.222 1.064 2.222 2.377v1.399c0 3.522-5 3.566-5 0"})
);

export default MinaHeadingFive;
