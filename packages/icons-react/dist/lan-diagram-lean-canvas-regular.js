import React from 'react';

export const LanDiagramLeanCanvasRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M464 80v192h64V96c0-8.8-7.2-16-16-16zm-48 0h-48v80h48zm-96 0h-64v192h64zm-112 0h-48v80h48zm-96 0H64c-8.8 0-16 7.2-16 16v176h64zM48 320v96c0 8.8 7.2 16 16 16h200V320zm264 112h200c8.8 0 16-7.2 16-16v-96H312zM0 96c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm208 176v-64h-48v64zm208-64h-48v64h48z"})
);

export default LanDiagramLeanCanvasRegular;
