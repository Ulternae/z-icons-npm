import React from 'react';

export const LanFilter = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M2.4 83.8C7.4 71.8 19.1 64 32 64h448c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9L320 301.3V480c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-64-64c-6-6-9.4-14.1-9.4-22.6l.1-114.8L9.4 118.6c-9.2-9.1-11.9-22.9-7-34.8M480 96H32l187.3 187.3c3 3 4.7 7.1 4.7 11.3V416l64 64V294.6c0-4.2 1.7-8.3 4.7-11.3z"})
);

export default LanFilter;
