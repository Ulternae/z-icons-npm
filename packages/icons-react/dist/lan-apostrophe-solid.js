import React from 'react';

export const LanApostropheSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 192 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M72 352c66.3 0 120-53.7 120-120V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64h64v8c0 30.9-25.1 56-56 56h-8c-17.7 0-32 14.3-32 32s14.3 32 32 32z"})
);

export default LanApostropheSolid;
