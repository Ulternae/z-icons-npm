import React from 'react';

export const LanGlassesAlt = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M124.5 64c-22.9 0-42.6 16.2-47.1 38.6L50.2 238.5c23.4-19 53.3-30.5 85.8-30.5 55.1 0 102.6 32.8 124 80h56.1c21.3-47.2 68.8-80 124-80 32.5 0 62.4 11.4 85.8 30.5l-27.3-135.9C494.1 80.2 474.4 64 451.5 64H416c-8.8 0-16-7.2-16-16s7.2-16 16-16h35.5c38.1 0 71 26.9 78.4 64.3l42.6 212.9c2.3 11.5 3.4 23.1 3.4 34.8 0 75.1-60.9 136-136 136S304 419.1 304 344q0-12.3 2.1-24h-36.2q2.1 11.7 2.1 24c0 75.1-60.9 136-136 136S0 419.1 0 344c0-11.7 1.2-23.4 3.4-34.8L46 96.3C53.5 58.9 86.3 32 124.5 32H160c8.8 0 16 7.2 16 16s-7.2 16-16 16zM32 344a104 104 0 1 0 208 0 104 104 0 1 0-208 0m408 104a104 104 0 1 0 0-208 104 104 0 1 0 0 208"})
);

export default LanGlassesAlt;
