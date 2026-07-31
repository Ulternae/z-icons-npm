import React from 'react';

export const LanJeansStraightSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M414.4 0H34.5C16 0 1.4 15.6 2.6 34L4 56h441l1.4-22c1.2-18.4-13.5-34-31.9-34zm-89.6 96h-76.3v384c0 17.7 14.3 32 32 32h105.9c16.9 0 30.9-13.1 31.9-30l18.4-294h-12.2c-52.5 0-95.6-40.5-99.7-92m40.2 0c3.9 29.4 29 52 59.5 52h14.7l3.3-52zm-164.6 0h-76.3c-4.1 51.5-47.1 92-99.7 92H12.2l18.4 294c1.1 16.9 15 30 31.9 30h105.9c17.7 0 32-14.3 32-32zm-194 0 3.2 52h14.8c30.4 0 55.6-22.6 59.5-52z"})
);

export default LanJeansStraightSolid;
