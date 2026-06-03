import React from 'react';

export const LanMoonStars = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 512 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M464-16v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V48h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16h32v-32c0-8.8 7.2-16 16-16s16 7.2 16 16M224 96C118 96 32 182 32 288s86 192 192 192c40.9 0 78.9-12.8 110.1-34.6C235 437.3 157 354.3 157 253c0-64.4 31.6-121.5 80.1-156.6-4.3-.3-8.7-.4-13.1-.4M0 288C0 164.3 100.3 64 224 64c17 0 33.6 1.9 49.6 5.5 8.7 2 15.2 9.2 16.2 18s-3.5 17.3-11.5 21.3c-53 26.4-89.3 81.1-89.3 144.2 0 88.9 72.1 161 161 161 4.4 0 8.7-.2 12.9-.5 8.8-.7 17.2 4.2 20.8 12.3s1.8 17.6-4.6 23.8C338.9 488.2 284.2 512 224 512 100.3 512 0 411.7 0 288m384-144c8.8 0 16 7.2 16 16v64h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16h64v-64c0-8.8 7.2-16 16-16"})
);

export default LanMoonStars;
