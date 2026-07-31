import React from 'react';

export const LanRollerCoasterThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M16 206.7C16 136.7 72.7 80 142.7 80q4.65 0 9.3.3V472c0 4.4 3.6 8 8 8s8-3.6 8-8V82.6c36.8 7.5 68.9 31.1 86.8 65.1l25.2 47.9V472c0 4.4 3.6 8 8 8s8-3.6 8-8V226l48.7 92.5c13.9 26.4 36.6 46.3 63.3 56.9V472c0 4.4 3.6 8 8 8s8-3.6 8-8v-91.5c9.5 2.3 19.3 3.5 29.3 3.5 45.7 0 85.6-25 106.7-62.1V472c0 4.4 3.6 8 8 8s8-3.6 8-8V249.1c0-66.9-54.2-121.1-121.1-121.1-32.1 0-62.9 12.8-85.7 35.5l-22.1 22.1 7.8 14.8 25.6-25.6c16.2-16.2 37.1-26.5 59.5-29.7v173.4c4.3 1 8.7 1.5 13.3 1.5.9 0 1.8 0 2.7-.1V144c57.5.6 104 47.4 104 105.1v12.2c0 58.9-47.8 106.7-106.7 106.7-39.6 0-76-22-94.4-57L269 140.2C244.3 93.4 195.7 64 142.7 64 63.9 64 0 127.9 0 206.7V472c0 4.4 3.6 8 8 8s8-3.6 8-8z"})
);

export default LanRollerCoasterThin;
