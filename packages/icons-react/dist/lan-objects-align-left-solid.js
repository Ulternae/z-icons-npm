import React from 'react';

export const LanObjectsAlignLeftSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 32v448c0 17.7 14.3 32 32 32s32-14.3 32-32V32C64 14.3 49.7 0 32 0S0 14.3 0 32m176 32c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48zm0 224c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48z"})
);

export default LanObjectsAlignLeftSolid;
