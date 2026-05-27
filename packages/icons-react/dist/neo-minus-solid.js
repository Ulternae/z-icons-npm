import React from 'react';

export const NeoMinusSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 560 560',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 280c0 20 .4 41.4 7.7 59.2 8.7 21.2 25.3 33.9 47.7 41 20.5 6.5 47.9 9.2 82.8 10.5 93.8 3.5 189.9 3.5 283.7 0 35-1.3 62.3-4 82.8-10.5 22.4-7.1 39-19.8 47.7-41 7.3-17.8 7.7-39.1 7.7-59.2s-.4-41.4-7.7-59.2c-8.7-21.2-25.3-33.9-47.7-41-20.5-6.5-47.9-9.2-82.8-10.5-93.8-3.5-189.9-3.5-283.7 0-35 1.3-62.3 4-82.8 10.5-22.4 7.1-39 19.8-47.7 41C.4 238.6 0 259.9 0 280"})
);

export default NeoMinusSolid;
