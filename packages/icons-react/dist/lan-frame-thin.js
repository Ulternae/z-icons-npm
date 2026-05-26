import React from 'react';

export const LanFrameThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M512 72c0-4.4-3.6-8-8-8h-56V8c0-4.4-3.6-8-8-8s-8 3.6-8 8v56H80V8c0-4.4-3.6-8-8-8s-8 3.6-8 8v56H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h56v352H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h56v56c0 4.4 3.6 8 8 8s8-3.6 8-8v-56h352v56c0 4.4 3.6 8 8 8s8-3.6 8-8v-56h56c4.4 0 8-3.6 8-8s-3.6-8-8-8h-56V80h56c4.4 0 8-3.6 8-8m-80 8v352H80V80z"})
);

export default LanFrameThin;
