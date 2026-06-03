import React from 'react';

export const LanTableRowsRemoveAbove = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -7.95 448 519.95',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 96c0-35.3 28.7-64 64-64h32v32H64c-17.7 0-32 14.3-32 32v144h384V96c0-17.7-14.3-32-32-32h-32V32h32c35.3 0 64 28.7 64 64v320l-.3 6.5c-3.1 30.1-27 54.1-57.1 57.1l-6.5.3h-320c-35.3 0-64-28.7-64-64zm32 320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V272H32zM156.7 19.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L224 41.4l44.7-44.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L246.6 64l44.7 44.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L224 86.6l-44.7 44.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L201.4 64z"})
);

export default LanTableRowsRemoveAbove;
