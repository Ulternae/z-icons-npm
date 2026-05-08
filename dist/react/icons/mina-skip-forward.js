import React from 'react';

export const MinaSkipForward = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M19.5 3v18m-4.726-8.22-8.65 6.92a1 1 0 0 1-1.624-.78V5.08a1 1 0 0 1 1.625-.78l8.649 6.92a1 1 0 0 1 0 1.56"})
);

export default MinaSkipForward;
