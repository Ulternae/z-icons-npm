import React from 'react';

export const LanDiagramCellsSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M448 160c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64zm-64 256v-64H64v64zm0 64H64c-35.3 0-64-28.7-64-64v-64c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64"})
);

export default LanDiagramCellsSolid;
