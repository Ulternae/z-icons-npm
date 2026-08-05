import React from 'react';

export function LanTableCellsColumnsThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 48c-26.5 0-48 21.5-48 48v80h416V96c0-26.5-21.5-48-48-48zM16 192v224c0 26.5 21.5 48 48 48h80V192zm144 272h128V192H160zm144 0h80c26.5 0 48-21.5 48-48V192H304zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"})
  );
}

export default LanTableCellsColumnsThin;
