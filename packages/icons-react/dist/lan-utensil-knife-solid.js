import React from 'react';

export const LanUtensilKnifeSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '-2.575 0 514.575 514.775',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m425.8 38.4-419 419c-12.5 12.5-12.5 32.8 0 45.3l2.7 2.7c12.5 12.5 32.8 12.5 45.3 0L224.2 336l30.1 30.1c18.7 18.7 49.1 18.7 67.9 0l148.4-148.5c49.5-49.5 49.5-129.7 0-179.2-12.4-12.4-32.4-12.4-44.8 0"})
);

export default LanUtensilKnifeSolid;
