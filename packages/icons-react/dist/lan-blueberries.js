import React from 'react';

export const LanBlueberries = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M382.7 312.3C439.3 292.9 480 239.2 480 176c0-79.5-64.5-144-144-144-63.2 0-116.9 40.7-136.3 97.3-7.8-.9-15.7-1.3-23.7-1.3-3.2 0-6.3.1-9.4.2C187.4 54.2 255.4 0 336 0c97.2 0 176 78.8 176 176 0 80.6-54.2 148.6-128.2 169.4.1-3.1.2-6.3.2-9.4 0-8-.5-15.9-1.3-23.7M320 336a144 144 0 1 0-288 0 144 144 0 1 0 288 0M0 336a176 176 0 1 1 352 0 176 176 0 1 1-352 0m176-96v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16h32v-32c0-8.8 7.2-16 16-16s16 7.2 16 16M368 80v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16h32V80c0-8.8 7.2-16 16-16s16 7.2 16 16"})
);

export default LanBlueberries;
