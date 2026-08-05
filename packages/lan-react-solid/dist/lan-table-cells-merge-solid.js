import React from 'react';

export function LanTableCellsMergeSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M384 32c33.1 0 60.4 25.2 63.7 57.5l.3 6.5v320l-.3 6.5c-3.1 30.1-27 54.1-57.1 57.1l-6.5.3h-320c-35.3 0-64-28.7-64-64L0 96c0-35.3 28.7-64 64-64zM256 416h128v-64H256zm-192 0h128v-64H64zm0-128h320v-64H64zm192-128h128V96H256zm-192 0h128V96H64z"})
  );
}

export default LanTableCellsMergeSolid;
