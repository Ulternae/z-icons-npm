import React from 'react';

export const LanUtilityPoleDoubleThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 0c4.4 0 8 3.6 8 8v88h144V40c0-4.4 3.6-8 8-8s8 3.6 8 8v56h72.1V40c0-4.4 3.6-8 8-8s8 3.6 8 8v64c0 4.4-3.6 8-8 8h-53.7L264.1 228.4V288h144v-40c0-4.4 3.6-8 8-8s8 3.6 8 8v40h72v-40c0-4.4 3.6-8 8-8s8 3.6 8 8v48c0 4.4-3.6 8-8 8h-53.7L264.1 420.4V504c0 4.4-3.6 8-8 8s-8-3.6-8-8l-.1-83.6L61.7 304H8c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8s8 3.6 8 8v40h72v-40c0-4.4 3.6-8 8-8s8 3.6 8 8v40h144v-59.6L61.7 112H8c-4.4 0-8-3.6-8-8V40c0-4.4 3.6-8 8-8s8 3.6 8 8v56h72V40c0-4.4 3.6-8 8-8s8 3.6 8 8v56h144V8c0-4.4 3.6-8 8-8m-8 112H91.9L248 209.6zm16 97.6L420.1 112H264zM248 304H91.9L248 401.6zm16 97.6L420.1 304H264z"})
);

export default LanUtilityPoleDoubleThin;
