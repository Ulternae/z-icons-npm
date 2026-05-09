import React from 'react';

export const MinaEgg = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M12 21c4.004 0 7.25-3.224 7.25-7.2S16.004 3 12 3 4.75 9.824 4.75 13.8 7.996 21 12 21"})
);

export default MinaEgg;
