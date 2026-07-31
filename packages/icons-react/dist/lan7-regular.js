import React from 'react';

export const Lan7Regular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 56c0-13.3 10.7-24 24-24h272c8.6 0 16.6 4.7 20.9 12.2s4.1 16.8-.3 24.2l-240 400c-6.8 11.4-21.6 15-32.9 8.2s-15.1-21.6-8.3-32.9L253.6 80H24C10.7 80 0 69.3 0 56"})
);

export default Lan7Regular;
