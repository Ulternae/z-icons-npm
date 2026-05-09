import React from 'react';

export const MinaHeadingFour = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M3.75 4.5v15m9.5-15v15M3.75 12h9.5m5.833-2.5c-.833 3.75-3.333 6.875-3.333 6.875h5M19.5 19.5v-5"})
);

export default MinaHeadingFour;
