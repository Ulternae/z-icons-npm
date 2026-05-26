import React from 'react';

export const LanShirtLongSleeveThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M137.7 0C99.8 0 66.2 24.2 54.2 60.2L3.7 211.6C1.2 219 0 226.6 0 234.4V424c0 13.3 10.7 24 24 24h72v24c0 22.1 17.9 40 40 40h240c22.1 0 40-17.9 40-40v-24h72c13.3 0 24-10.7 24-24V234.4c0-7.7-1.2-15.4-3.7-22.8L457.8 60.2c-12-36-45.6-60.2-83.5-60.2zM96 200v232H24c-4.4 0-8-3.6-8-8V234.4c0-6 1-12 2.9-17.7L69.4 65.2C79.2 35.8 106.7 16 137.7 16H168c0 48.6 39.4 88 88 88s88-39.4 88-88h30.3c31 0 58.5 19.8 68.3 49.2l50.5 151.4c1.9 5.7 2.9 11.7 2.9 17.7V424c0 4.4-3.6 8-8 8h-72V200c0-4.4-3.6-8-8-8s-8 3.6-8 8v272c0 13.3-10.7 24-24 24H136c-13.3 0-24-10.7-24-24V200c0-4.4-3.6-8-8-8s-8 3.6-8 8M328 16c0 39.8-32.2 72-72 72s-72-32.2-72-72z"})
);

export default LanShirtLongSleeveThin;
