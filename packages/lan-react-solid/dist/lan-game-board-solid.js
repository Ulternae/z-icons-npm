import React from 'react';

export function LanGameBoardSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm144 0v80h80V96zm0 160v-80H64v80zm80 0h-80v80H64v80h80v-80h80v80h80v-80h80v-80h-80v-80h80V96h-80v80h-80zm0 0h80v80h-80z"})
  );
}

export default LanGameBoardSolid;
