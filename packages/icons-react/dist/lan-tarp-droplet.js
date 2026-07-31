import React from 'react';

export const LanTarpDroplet = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M230.5 82.4c-10.8 21.3-2.8 45.6 25.5 45.6 27.6 0 36.3-23.2 25.5-44.2-6.4-12.5-16.4-27.4-25.9-40.4-9.3 12.5-18.9 26.8-25.1 39.1zM192 100c0-22.3 24.6-58.5 43.3-82.8 3.2-4.1 6.2-7.9 8.8-11.2 6.1-7.5 17.4-7.4 23.4.2 2.6 3.3 5.6 7.1 8.7 11.2 18.7 24.8 43.7 61.8 43.7 82.5 0 33.1-28.7 60-64 60s-64-26.9-64-60zm256-4h-80c0-11.1-1.6-21.9-4.6-32H448c35.3 0 64 28.7 64 64v133.5c0 17-6.7 33.3-18.7 45.3L370.7 429.3c-12 12-28.3 18.7-45.3 18.7H64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64h84.6c-3 10.1-4.6 20.9-4.6 32H64c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32h256v-96c0-35.3 28.7-64 64-64h96V128c0-17.7-14.3-32-32-32m18.7 192H384c-17.7 0-32 14.3-32 32v82.7zM96 136a24 24 0 1 1 0 48 24 24 0 1 1 0-48"})
);

export default LanTarpDroplet;
