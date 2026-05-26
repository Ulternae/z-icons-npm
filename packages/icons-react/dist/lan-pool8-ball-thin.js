import React from 'react';

export const LanPool8BallThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m384-64a128 128 0 1 0-256 0 128 128 0 1 0 256 0m-272 0a144 144 0 1 1 288 0 144 144 0 1 1-288 0m144-32a24 24 0 1 0 0-48 24 24 0 1 0 0 48m26 6.4c17.8 9.4 30 28.1 30 49.6 0 30.9-25.1 56-56 56s-56-25.1-56-56c0-21.5 12.2-40.2 30-49.6-8.6-7.3-14-18.2-14-30.4 0-22.1 17.9-40 40-40s40 17.9 40 40c0 12.2-5.4 23.1-14 30.4m-26 9.6a40 40 0 1 0 0 80 40 40 0 1 0 0-80"})
);

export default LanPool8BallThin;
