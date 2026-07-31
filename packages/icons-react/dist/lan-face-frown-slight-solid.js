import React from 'react';

export const LanFaceFrownSlightSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-58.5-130c-7.7 10.8-22.7 13.2-33.5 5.5s-13.2-22.7-5.5-33.5c21.7-30.2 57.3-50 97.5-50s75.7 19.8 97.5 50c7.7 10.8 5.3 25.8-5.5 33.5s-25.8 5.3-33.5-5.5c-13.1-18.2-34.4-30-58.5-30s-45.4 11.8-58.5 30M144 208a32 32 0 1 1 64 0 32 32 0 1 1-64 0m192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"})
);

export default LanFaceFrownSlightSolid;
