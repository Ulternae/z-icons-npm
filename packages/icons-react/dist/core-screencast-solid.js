import React from 'react';

export const CoreScreencastSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H320c0-176.7-143.3-320-320-320zm0 128c141.4 0 256 114.6 256 256h-56c0-110.5-89.5-200-200-200zm0 96c88.4 0 160 71.6 160 160h-56c0-57.4-46.6-104-104-104zm0 96c35.3 0 64 28.7 64 64H0z"})
);

export default CoreScreencastSolid;
