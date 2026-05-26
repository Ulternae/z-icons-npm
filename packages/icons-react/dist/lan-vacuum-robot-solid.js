import React from 'react';

export const LanVacuumRobotSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m95-351c-52.5-52.5-137.6-52.5-190.1 0-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9c71.2-71.2 186.7-71.2 257.9 0s71.2 186.7 0 257.9c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9c52.5-52.5 52.5-137.6 0-190.1m-160 62c9.4-9.4 24.6-9.4 33.9 0l64 64c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9m-64 64c9.4-9.4 24.6-9.4 33.9 0l64 64c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9"})
);

export default LanVacuumRobotSolid;
