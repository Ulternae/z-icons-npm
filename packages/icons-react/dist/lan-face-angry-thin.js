import React from 'react';

export const LanFaceAngryThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-160c30.6 0 57.6 15.6 73.3 39.3 2.4 3.7 7.4 4.7 11.1 2.2s4.7-7.4 2.2-11.1C324 354.5 292.2 336 256 336s-68 18.5-86.7 46.5c-2.4 3.7-1.4 8.6 2.2 11.1s8.6 1.4 11.1-2.2c15.8-23.8 42.8-39.4 73.4-39.4m-80-96a16 16 0 1 0 0-32 16 16 0 1 0 0 32m176-16a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-221.5-71.6c-4.2-1.4-8.7.9-10.1 5.1s.9 8.7 5.1 10.1l96 32c4.2 1.4 8.7-.9 10.1-5.1s-.9-8.7-5.1-10.1zm256 15.2c4.2-1.4 6.5-5.9 5.1-10.1s-5.9-6.5-10.1-5.1l-96 32c-4.2 1.4-6.5 5.9-5.1 10.1s5.9 6.5 10.1 5.1z"})
);

export default LanFaceAngryThin;
