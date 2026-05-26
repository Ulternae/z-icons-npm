import React from 'react';

export const LanShirtRunning = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M80 0c8.8 0 16 7.2 16 16v48c0 53 43 96 96 96s96-43 96-96V16c0-8.8 7.2-16 16-16s16 7.2 16 16c0 134.3 29.3 192.6 45.6 214.6 8.9 12 18.4 28.6 18.4 47.6V456c0 30.9-25.1 56-56 56H56c-30.9 0-56-25.1-56-56V278.2c0-19 9.5-35.7 18.4-47.6C34.7 208.6 64 150.4 64 16c0-8.8 7.2-16 16-16M44.1 249.6c-7.6 10.2-12.1 20-12.1 28.6v118.1l278.6-201.2 1.4-1c-5.5-15.9-10.5-34.9-14.6-57.5-23.1 33.5-61.7 55.5-105.5 55.5s-82.4-22-105.5-55.5C75.7 196.4 58 230.7 44 249.7zM32 435.7V456c0 13.3 10.7 24 24 24h272c13.3 0 24-10.7 24-24V278.2c0-8.6-4.6-18.4-12.1-28.6-4.8-6.5-10-14.7-15.2-25.2L41.4 429z"})
);

export default LanShirtRunning;
