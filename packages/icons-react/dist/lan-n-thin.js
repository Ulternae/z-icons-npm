import React from 'react';

export const LanNThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M5.2 32.5c3.1-1.2 6.7-.2 8.9 2.3L368 450.3V40c0-4.4 3.6-8 8-8s8 3.6 8 8v432c0 3.4-2.1 6.3-5.2 7.5s-6.7.2-8.9-2.3L16 61.7V472c0 4.4-3.6 8-8 8s-8-3.6-8-8V40c0-3.4 2.1-6.3 5.2-7.5"})
);

export default LanNThin;
