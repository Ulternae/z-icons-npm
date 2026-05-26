import React from 'react';

export const LanCheckCircleThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m0-496a240 240 0 1 0 0 480 240 240 0 1 0 0-480m97.4 144.4c2.6-3.6 7.6-4.3 11.2-1.8s4.4 7.6 1.8 11.2L230.5 356.7c-1.4 1.9-3.5 3.1-5.8 3.3s-4.6-.7-6.3-2.3l-72-72c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l65.3 65.3z"})
);

export default LanCheckCircleThin;
