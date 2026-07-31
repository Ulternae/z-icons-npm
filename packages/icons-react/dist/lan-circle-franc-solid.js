import React from 'react';

export const LanCircleFrancSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-64-360c0-13.3 10.7-24 24-24h112c13.3 0 24 10.7 24 24s-10.7 24-24 24h-88v40h56c13.3 0 24 10.7 24 24s-10.7 24-24 24h-56v24h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v40c0 13.3-10.7 24-24 24s-24-10.7-24-24v-40h-16c-8.8 0-16-7.2-16-16s7.2-16 16-16h16z"})
);

export default LanCircleFrancSolid;
