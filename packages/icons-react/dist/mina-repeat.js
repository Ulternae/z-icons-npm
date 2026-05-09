import React from 'react';

export const MinaRepeat = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"m17 3 4 3-4 3"}), React.createElement('path', {"d":"M3 12v-2a4 4 0 0 1 4-4h14M7 21l-4-3 4-3"}), React.createElement('path', {"d":"M21 12v2a4 4 0 0 1-4 4H3"})
);

export default MinaRepeat;
