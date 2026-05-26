import React from 'react';

export const LanWaveTriangleThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M144.3 64c2.7.1 5.2 1.5 6.6 3.8l217.7 357.6 129-182.1c2.6-3.6 7.5-4.5 11.2-1.9s4.5 7.5 1.9 11.2l-136 192c-1.6 2.2-4.1 3.5-6.8 3.4s-5.2-1.5-6.6-3.8L143.5 86.6l-129 182c-2.6 3.6-7.5 4.5-11.2 1.9s-4.5-7.5-1.9-11.2l136-192c1.6-2.2 4.1-3.5 6.8-3.4z"})
);

export default LanWaveTriangleThin;
