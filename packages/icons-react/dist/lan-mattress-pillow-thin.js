import React from 'react';

export const LanMattressPillowThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 80v352H64c-26.5 0-48-21.5-48-48V128c0-26.5 21.5-48 48-48zm16 0h240c26.5 0 48 21.5 48 48v256c0 26.5-21.5 48-48 48H272zM64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm96 80c17.7 0 32 14.3 32 32v160c0 17.7-14.3 32-32 32h-48c-17.7 0-32-14.3-32-32V176c0-17.7 14.3-32 32-32zm-48-16c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h48c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48z"})
);

export default LanMattressPillowThin;
