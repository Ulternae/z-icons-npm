import React from 'react';

export const CoreLockSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M128 128c0-35.3 28.7-64 64-64s64 28.7 64 64v64H128zm-64 0v64c-35.3 0-64 28.7-64 64v192c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64v-64C320 57.3 262.7 0 192 0S64 57.3 64 128"})
);

export default CoreLockSolid;
