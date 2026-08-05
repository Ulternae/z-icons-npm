import React from 'react';

export function LanTableCellsHeaderSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M320 224v64h64v-64zm0 128v64h64v-64zm-64-128h-64v64h64zm0 128h-64v64h64zM128 224H64v64h64zm0 128H64v64h64zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"})
  );
}

export default LanTableCellsHeaderSolid;
