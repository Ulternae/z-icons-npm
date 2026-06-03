import React from 'react';

export const LanObjectsAlignCenterHorizontalSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 448 576',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 0c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H48C21.5 64 0 85.5 0 112v64c0 26.5 21.5 48 48 48h144v64h-80c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h80v64c0 17.7 14.3 32 32 32s32-14.3 32-32v-64h80c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48h-80v-64h144c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48H256z"})
);

export default LanObjectsAlignCenterHorizontalSolid;
