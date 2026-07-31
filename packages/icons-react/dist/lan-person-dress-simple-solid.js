import React from 'react';

export const LanPersonDressSimpleSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 256 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64.1 64a64 64 0 1 1 128 0 64 64 0 1 1-128 0M46.5 221.5c10.4-36.4 43.7-61.5 81.6-61.5s71.2 25.1 81.6 61.5l34.8 121.7c5.8 20.4-9.5 40.8-30.8 40.8h-21.6v80c0 26.5-21.5 48-48 48h-32c-26.5 0-48-21.5-48-48v-80H42.5c-21.3 0-36.6-20.3-30.8-40.8z"})
);

export default LanPersonDressSimpleSolid;
