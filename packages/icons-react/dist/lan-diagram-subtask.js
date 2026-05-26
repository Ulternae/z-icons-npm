import React from 'react';

export const LanDiagramSubtask = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M384 64c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zM112 224h272c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64h16v96c0 44.2 35.8 80 80 80h32v16c0 35.3 28.7 64 64 64h128c35.3 0 64-28.7 64-64v-64c0-35.3-28.7-64-64-64H256c-35.3 0-64 28.7-64 64v16h-32c-26.5 0-48-21.5-48-48zm112 144v-16c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H256c-17.7 0-32-14.3-32-32z"})
);

export default LanDiagramSubtask;
