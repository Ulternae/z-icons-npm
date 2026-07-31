import React from 'react';

export const LanGhostThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 513.35',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 192C0 86 86 0 192 0s192 86 192 192v260.4c0 18.4-19.9 30-35.9 20.8L326.6 461c-3.1-1.8-7.1-1.3-9.6 1.3l-44 44c-9.4 9.4-24.6 9.4-33.9 0L197.7 465c-3.1-3.1-8.2-3.1-11.3 0L145 506.3c-9.4 9.4-24.6 9.4-33.9 0l-44-44c-2.6-2.6-6.5-3.1-9.6-1.3l-21.6 12.3c-16 9.1-35.9-2.4-35.9-20.9zM192 16C94.8 16 16 94.8 16 192v260.4c0 6.1 6.6 10 12 6.9L49.5 447c9.4-5.4 21.2-3.8 28.9 3.9l44 44c3.1 3.1 8.2 3.1 11.3 0l41.3-41.2c9.4-9.4 24.6-9.4 33.9 0l41.4 41.3c3.1 3.1 8.2 3.1 11.3 0l44-44c7.7-7.7 19.5-9.2 28.9-3.9l21.5 12.3c5.3 3 12-.8 12-6.9V192c0-97.2-78.8-176-176-176m-64 152a24 24 0 1 0 0 48 24 24 0 1 0 0-48m40 24a40 40 0 1 1-80 0 40 40 0 1 1 80 0m64 0a24 24 0 1 0 48 0 24 24 0 1 0-48 0m24 40a40 40 0 1 1 0-80 40 40 0 1 1 0 80"})
);

export default LanGhostThin;
