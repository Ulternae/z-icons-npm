import React from 'react';

export const LanDiagramSubtaskRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M384 80c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zM64 32C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64h8v96c0 48.6 39.4 88 88 88h32v8c0 35.3 28.7 64 64 64h128c35.3 0 64-28.7 64-64v-64c0-35.3-28.7-64-64-64H256c-35.3 0-64 28.7-64 64v8h-32c-22.1 0-40-17.9-40-40v-96h264c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm320 304c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H256c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16z"})
);

export default LanDiagramSubtaskRegular;
