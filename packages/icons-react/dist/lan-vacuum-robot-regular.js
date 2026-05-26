import React from 'react';

export const LanVacuumRobotRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m79-335c43.6 43.6 43.6 114.4 0 158.1-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0c62.4-62.4 62.4-163.6 0-225.9S205.4 80.6 143 143c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0c43.6-43.6 114.4-43.6 158.1 0zm-110 46c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9zm-64 64c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9z"})
);

export default LanVacuumRobotRegular;
