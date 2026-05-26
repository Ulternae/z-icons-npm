import React from 'react';

export const LanFireHydrantSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M224 32v4c45 11.6 80.4 47 92 92h12c13.3 0 24 10.7 24 24s-10.7 24-24 24H56c-13.3 0-24-10.7-24-24s10.7-24 24-24h12c11.6-45 47-80.4 92-92v-4c0-17.7 14.3-32 32-32s32 14.3 32 32M32 488c0-13.3 10.7-24 24-24h8v-64H48c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h16v-64h256v64h16c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-16v64h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H56c-13.3 0-24-10.7-24-24m160-88a64 64 0 1 0 0-128 64 64 0 1 0 0 128"})
);

export default LanFireHydrantSolid;
