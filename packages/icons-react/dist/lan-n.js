import React from 'react';

export const LanN = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M10.5 33c6.3-2.3 13.4-.4 17.7 4.7L352 420.3V48c0-8.8 7.2-16 16-16s16 7.2 16 16v416c0 6.7-4.2 12.7-10.5 15s-13.4.4-17.7-4.7L32 91.7V464c0 8.8-7.2 16-16 16s-16-7.2-16-16V48c0-6.7 4.2-12.7 10.5-15"})
);

export default LanN;
