import React from 'react';

export const LanPlaneLandingGearSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M249.8 74.4 401.7 240h150.6c30.9 0 56 25.1 56 56s-25.1 56-56 56H101.7c-30.9 0-57.4-22.1-63-52.6l-19-104.6C18 185 25.5 176 35.5 176h17.3c7.3 0 14.2 3.3 18.7 9l44 55H219L167.4 85.1c-3.5-10.4 4.2-21.1 15.1-21.1h43.7c9 0 17.5 3.8 23.6 10.4M224.3 416a32 32 0 1 1 64 0 32 32 0 1 1-64 0m192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"})
);

export default LanPlaneLandingGearSolid;
