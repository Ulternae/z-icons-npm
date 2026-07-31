import React from 'react';

export const LanJugRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -16 448 528',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M192 77.5c0 17.1-5.5 33.7-15.6 47.5L95.6 234.6C85.5 248.4 80 265 80 282.1v5.9h288v-5.9c0-17.1-5.5-33.7-15.6-47.5l-80.8-109.7A79.9 79.9 0 0 1 256 77.5V32h-64zM80 416v32c0 8.8 7.2 16 16 16h256c8.8 0 16-7.2 16-16v-32zM304 32v45.5c0 6.8 2.2 13.5 6.2 19l15 20.4c13-12.9 30.9-20.9 50.7-20.9 39.8 0 72 32.2 72 72 0 28.9-17.1 53.9-41.6 65.3 6.3 15.4 9.6 31.9 9.6 48.8L416 448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V282.1c0-27.3 8.7-53.9 25-75.9l80.8-109.7c4.1-5.5 6.2-12.2 6.2-19V32c-13.3 0-24-10.7-24-24s10.7-24 24-24h160c13.3 0 24 10.7 24 24s-10.7 24-24 24m50.7 124.9 25.6 34.8c11.2-2 19.7-11.8 19.7-23.6 0-13.3-10.7-24-24-24-9.2 0-17.2 5.2-21.3 12.9z"})
);

export default LanJugRegular;
