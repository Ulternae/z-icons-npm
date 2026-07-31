import React from 'react';

export const LanCirclePThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-56-352c-4.4 0-8 3.6-8 8v176c0 4.4 3.6 8 8 8s8-3.6 8-8v-48h60c37.6 0 68-30.4 68-68s-30.4-68-68-68zm68 120h-60V176h60c28.7 0 52 23.3 52 52s-23.3 52-52 52"})
);

export default LanCirclePThin;
