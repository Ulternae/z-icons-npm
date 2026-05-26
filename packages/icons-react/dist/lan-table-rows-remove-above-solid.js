import React from 'react';

export const LanTableRowsRemoveAboveSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 96c0-35.3 28.7-64 64-64h32v64H64v128h320V96h-32V32h32c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm384 320V288H64v128zM156.1 30.1c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l33.9 33.9 34-34c9.4-9.4 24.6-9.4 33.9 0 9.4 9.4 9.4 24.6 0 34L257.9 64l34 33.9c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-34-33.9-33.9 34c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L190 64z"})
);

export default LanTableRowsRemoveAboveSolid;
