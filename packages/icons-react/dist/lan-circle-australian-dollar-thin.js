import React from 'react';

export const LanCircleAustralianDollarThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m73.7-384c-5 0-9.1 4.1-9.1 9.1V156c-25.9 3.9-45.7 26.2-45.7 53.1 0 26.2 19 48.6 44.9 53L355 268c17.1 2.8 29.6 17.6 29.6 34.9 0 19.6-15.9 35.4-35.4 35.4h-56c-5 0-9.1 4.1-9.1 9.1s4.1 9.1 9.1 9.1h27.4v18.3c0 5 4.1 9.1 9.1 9.1s9.1-4.1 9.1-9.1v-18.3h10.3c29.7 0 53.7-24 53.7-53.7 0-26.2-19-48.6-44.9-53l-35.2-5.8c-17.1-2.8-29.6-17.6-29.6-34.9 0-19.6 15.9-35.4 35.4-35.4h46.9c5 0 9.1-4.1 9.1-9.1s-4.1-9.1-9.1-9.1h-36.6v-18.3c0-5-4.1-9.1-9.1-9.1zM229.6 359.3c1.5 4.8 6.6 7.5 11.4 6s7.5-6.6 6-11.4l-58.2-187.8c-2-6.4-7.8-10.7-14.5-10.7s-12.5 4.3-14.5 10.7l-58.2 187.8c-1.5 4.8 1.2 9.9 6 11.4s9.9-1.2 11.4-6l12.3-39.6c.8.2 1.6.3 2.5.3h83.6zm-55.3-178.2 37.4 120.6h-74.8z"})
);

export default LanCircleAustralianDollarThin;
