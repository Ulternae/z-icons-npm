import React from 'react';

export const LanRows3Solid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M448 416V96l-.3-6.5C444.4 57.2 417.1 32 384 32H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320l6.5-.3c30.1-3.1 54.1-27 57.1-57.1l.3-6.5zm-64-64v64H64v-64zm0-64H64v-64h320zM64 160V96h320v64z"})
);

export default LanRows3Solid;
