import React from 'react';

export const LanHourglassEmpty = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16h16v41.6c0 49.4 22.8 96 61.8 126.3L166 256l-72.2 56.1c-39 30.3-61.8 77-61.8 126.3V480H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h352c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v-41.6c0-49.4-22.8-96-61.8-126.3L218 256l72.2-56.1c39-30.3 61.8-76.9 61.8-126.3V32h16c8.8 0 16-7.2 16-16s-7.2-16-16-16zm304 32v41.6c0 39.5-18.2 76.8-49.4 101L192 235.7l-78.6-61.1C82.2 150.4 64 113.1 64 73.6V32zM192 276.3l78.6 61.1c31.2 24.2 49.4 61.5 49.4 101V480H64v-41.6c0-39.5 18.2-76.8 49.4-101z"})
);

export default LanHourglassEmpty;
