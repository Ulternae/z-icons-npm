import React from 'react';

export const LanGlassesAltThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M116.5 48c-26.7 0-49.7 18.8-54.9 45L27.9 261.5C52.7 229 91.9 208 136 208c55.1 0 102.6 32.8 124 80h56.1c21.3-47.2 68.8-80 124-80 44.1 0 83.3 21 108.1 53.5L514.4 93c-5.2-26.2-28.2-45-54.9-45H424c-4.4 0-8-3.6-8-8s3.6-8 8-8h35.5c34.3 0 63.9 24.2 70.6 57.9l42.6 212.9c2.2 11.2 3.3 30.4 3.3 41.3 0 75.1-60.9 136-136 136s-136-61-136-136.1c0-13.9 2.1-27.4 6-40h-44c3.9 12.6 6 26.1 6 40 0 75.1-60.9 136-136 136S0 419.1 0 344c0-10.8 1.1-30.1 3.3-41.3L45.9 89.9C52.6 56.2 82.1 32 116.5 32H152c4.4 0 8 3.6 8 8s-3.6 8-8 8zM16 344a120 120 0 1 0 240 0 120 120 0 1 0-240 0m424 120a120 120 0 1 0 0-240 120 120 0 1 0 0 240"})
);

export default LanGlassesAltThin;
