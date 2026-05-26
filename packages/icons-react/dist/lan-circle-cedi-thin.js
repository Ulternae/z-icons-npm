import React from 'react';

export const LanCircleCediThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m8-408c0-4.4-3.6-8-8-8s-8 3.6-8 8v23.9c-66.1 5.3-118.1 60.7-118.1 128.1s52 122.8 118.1 128.1V408c0 4.4 3.6 8 8 8s8-3.6 8-8v-23.5c32-1.3 61-14.4 82.8-35 3.4-3.2 3.6-8.7.3-12.1s-8.7-3.6-12.1-.3c-18.7 17.7-43.5 28.9-71 30.3V144.8c27.4 1.3 52.3 12.6 71 30.3 3.4 3.2 8.9 3.1 12.1-.3s3.1-8.9-.3-12.1c-21.8-20.6-50.8-33.6-82.8-35v-23.5zM147.1 256c0-58 44.3-105.6 100.9-110.9V367c-56.6-5.4-100.9-53-100.9-111"})
);

export default LanCircleCediThin;
