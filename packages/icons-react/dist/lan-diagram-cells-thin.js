import React from 'react';

export const LanDiagramCellsThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M432 160c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48h320c26.5 0 48 21.5 48 48zm-48 64c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64zm48 192c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48h320c26.5 0 48 21.5 48 48zm-48 64c35.3 0 64-28.7 64-64v-64c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64z"})
);

export default LanDiagramCellsThin;
