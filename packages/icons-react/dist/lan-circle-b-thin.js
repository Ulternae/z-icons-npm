import React from 'react';

export const LanCircleBThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-64-344v176c0 4.4 3.6 8 8 8h84c28.7 0 52-23.3 52-52 0-22.3-14.1-41.4-33.9-48.8 11-9.5 17.9-23.6 17.9-39.2 0-28.7-23.3-52-52-52h-68c-4.4 0-8 3.6-8 8m112 44c0 19.9-16.1 36-36 36h-60v-72h60c19.9 0 36 16.1 36 36m-96 124v-72h76c19.9 0 36 16.1 36 36s-16.1 36-36 36z"})
);

export default LanCircleBThin;
