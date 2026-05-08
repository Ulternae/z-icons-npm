import React from 'react';

export const MinaHeadingSix = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M3.75 4.5v15m9.5-15v15M3.75 12h9.5M20 9.5h-1c-1.657 0-3 1.679-3 3.75v3.125m0 0c0 1.726 1.12 3.125 2.5 3.125s2.5-1.4 2.5-3.125-1.12-2.5-2.5-2.5-2.5.774-2.5 2.5"})
);

export default MinaHeadingSix;
