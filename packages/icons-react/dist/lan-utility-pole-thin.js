import React from 'react';

export const LanUtilityPoleThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 0c4.4 0 8 3.6 8 8v88h144V40c0-4.4 3.6-8 8-8s8 3.6 8 8v56h71.9V40c0-4.4 3.6-8 8-8s8 3.6 8 8v64c0 4.4-3.6 8-8 8h-53.1L264 259.9V504c0 4.4-3.6 8-8 8s-8-3.6-8-8V259.9L61.2 112H8c-4.4 0-8-3.6-8-8V40c0-4.4 3.6-8 8-8s8 3.6 8 8v56h71.9V40c0-4.4 3.6-8 8-8s8 3.6 8 8v56h144V8c0-4.4 3.6-8 8-8zm-8 112H87l161 127.5zm16 127.5L425 112H264z"})
);

export default LanUtilityPoleThin;
