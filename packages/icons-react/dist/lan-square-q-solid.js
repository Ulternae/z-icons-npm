import React from 'react';

export const LanSquareQSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm88 224c0 39.8 32.2 72 72 72 11.1 0 21.6-2.5 31-7l-25.9-25.9c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l26 25.8c4.5-9.4 7-19.9 7-31 0-39.8-32.2-72-72-72s-72 32.2-72 72m192 0c0 24.5-7.3 47.2-19.9 66.2L337 335c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L290.2 356c-19 12.6-41.7 19.9-66.2 19.9-66.3 0-120-53.7-120-120s53.7-120 120-120 120 53.7 120 120z"})
);

export default LanSquareQSolid;
