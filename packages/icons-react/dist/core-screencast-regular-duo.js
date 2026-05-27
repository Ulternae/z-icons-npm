import React from 'react';

export const CoreScreencastRegular-duo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 96h384v320H313.6C288.1 290.6 189.4 191.9 64 166.4z","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"M448 96H64v70.4c-20.7-4.2-42.1-6.4-64-6.4V96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H320c0-21.9-2.2-43.3-6.4-64H448zM0 224c141.4 0 256 114.6 256 256h-56c0-110.5-89.5-200-200-200zm0 96c88.4 0 160 71.6 160 160h-56c0-57.4-46.6-104-104-104zm0 96c35.3 0 64 28.7 64 64H0z"})
);

export default CoreScreencastRegular-duo;
