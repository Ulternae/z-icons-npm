import React from 'react';

export const LanPersonHalfDressRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 384 576',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M192 80a56 56 0 1 0 0-112 56 56 0 1 0 0 112m-16 32.8c-33.2 4-63.6 21.7-83.3 49.3L12.5 274c-7.7 10.8-5.2 25.8 5.5 33.5s25.8 5.2 33.5-5.5l62.1-86.7L70 363.5c-3 10.2 4.7 20.5 15.4 20.5H128v136c0 13.3 10.7 24 24 24s24-10.7 24-24V336h-47.8L176 173.3zm48 3.4V520c0 13.3 10.7 24 24 24s24-10.7 24-24V217.6l60.5 84.4c7.7 10.8 22.7 13.2 33.5 5.5s13.2-22.7 5.5-33.5l-79.2-110.5c-16.8-23.5-41.1-40-68.3-47.3"})
);

export default LanPersonHalfDressRegular;
