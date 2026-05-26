import React from 'react';

export const LanBreadLoafSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 224v-32C0 121.3 57.3 64 128 64h96c70.7 0 128 57.3 128 128v32c0 17.7-14.3 32-32 32v160c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V256c-17.7 0-32-14.3-32-32M344.8 64H448c70.7 0 128 57.3 128 128v32c0 17.7-14.3 32-32 32H393.3c4.3-9.8 6.7-20.6 6.7-32v-32c0-50.4-21.2-95.9-55.2-128M368 416V304h176v112c0 35.3-28.7 64-64 64H347.9c12.7-18.1 20.1-40.2 20.1-64"})
);

export default LanBreadLoafSolid;
