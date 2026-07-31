import React from 'react';

export const LanFlaskRoundPotion = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M80 32h16v121.7C38.6 186.9 0 248.9 0 320c0 106 86 192 192 192s192-86 192-192c0-71.1-38.6-133.1-96-166.3V32h16c8.8 0 16-7.2 16-16s-7.2-16-16-16H80c-8.8 0-16 7.2-16 16s7.2 16 16 16m48 131.2V32h128v131.2c0 6 3.4 11.5 8.7 14.2C316.5 203.9 352 257.8 352 320h-51.7c-26.1 0-51.7-7.1-74.1-20.5l-5-3c-26.7-16-57.3-24.5-88.5-24.5-26.7 0-53 6.2-76.9 18.2L33 301.6c6.2-54.3 39.6-100.3 86.2-124.2 5.4-2.7 8.7-8.2 8.7-14.2zM32.9 337.4l6.2-3.1 31.1-15.5c19.4-9.7 40.9-14.8 62.6-14.8 25.4 0 50.2 6.9 72 19.9l5 3c27.4 16.4 58.7 25.1 90.6 25.1h48.5C334 425 269.4 480 192 480c-82.5 0-150.4-62.4-159.1-142.6"})
);

export default LanFlaskRoundPotion;
