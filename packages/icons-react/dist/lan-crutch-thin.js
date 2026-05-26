import React from 'react';

export const LanCrutchThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M350.6 17.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l6.3 6.3L149 231.6a71.98 71.98 0 0 0-21.1 50.9v67c0 14.9-5.9 29.1-16.4 39.6l-69.3 69.3-40 40c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l109.3-109.3c10.5-10.5 24.7-16.4 39.6-16.4h67c19.1 0 37.4-7.6 50.9-21.1l162.6-162.6 6.3 6.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-144-144zM431.7 189 332 288.7 223.3 180 323 80.3zM339.3 28.7l144 144c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-144-144c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0M160.4 242.9l51.6-51.6L320.7 300l-51.6 51.6a55.92 55.92 0 0 1-39.6 16.4h-67c-7.5 0-14.9 1.2-21.9 3.4 2.2-7 3.4-14.4 3.4-21.9v-67c0-14.9 5.9-29.1 16.4-39.6"})
);

export default LanCrutchThin;
