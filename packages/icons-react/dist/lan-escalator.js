import React from 'react';

export const LanEscalator = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M208 64a24 24 0 1 0 0-48 24 24 0 1 0 0 48m0-80a56 56 0 1 1 0 112 56 56 0 1 1 0-112m83 271.8c12.8-10.2 28.6-15.8 45-15.8h104c39.8 0 72 32.2 72 72s-32.2 72-72 72h-78.7L221 496.2c-12.8 10.2-28.6 15.8-45 15.8H72c-39.8 0-72-32.2-72-72s32.2-72 72-72h78.7zm45 16.2c-9.1 0-17.9 3.1-25 8.8L166.4 396.5c-2.8 2.3-6.4 3.5-10 3.5H72c-22.1 0-40 17.9-40 40s17.9 40 40 40h104c9.1 0 17.9-3.1 25-8.8l144.6-115.7c2.8-2.3 6.4-3.5 10-3.5H440c22.1 0 40-17.9 40-40s-17.9-40-40-40zm-80-64c0-26.5-21.5-48-48-48s-48 21.5-48 48v80.9l-32 25.6V208c0-44.2 35.8-80 80-80 37.4 0 68.8 25.7 77.6 60.4L256.1 212v-4.1z"})
);

export default LanEscalator;
