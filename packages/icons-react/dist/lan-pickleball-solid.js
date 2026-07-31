import React from 'react';

export const LanPickleballSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -0.05 576.5 544.05',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M448.5 544a128 128 0 1 1 0-256 128 128 0 1 1 0 256M266.9 28c37.5-37.4 98.4-37.4 136 0l113.5 113.3c32.3 32.2 36.7 81.6 13.4 118.6-24.3-12.7-52-19.9-81.3-19.9-64.4 0-120.8 34.6-151.5 86.3L193.4 223l-1.8-1.7c-9.4-7.7-23.4-7.1-32.1 1.7-8.8 8.8-9.3 22.7-1.6 32.1l1.7 1.8 117.9 117.5c-3.2 13.3-4.9 27.2-4.9 41.5q0 19.65 4.2 38.1l-52.2-21.4c-23.9-9.8-51.4-4.3-69.7 13.9l-53.8 53.6-3 2.8c-15.7 12.8-38.9 11.9-53.6-2.8-15.6-15.6-15.6-40.9 0-56.5L98 390.2c18.4-18.3 23.9-45.9 13.9-69.8l-24.4-57.7c-10-23.9-4.5-51.4 13.8-69.7zm181.6 440a20 20 0 1 0 0 40 20 20 0 1 0 0-40m-72-72a20 20 0 1 0 0 40 20 20 0 1 0 0-40m72 0a20 20 0 1 0 0 40 20 20 0 1 0 0-40m72 0a20 20 0 1 0 0 40 20 20 0 1 0 0-40m-72-72a20 20 0 1 0 0 40 20 20 0 1 0 0-40"})
);

export default LanPickleballSolid;
