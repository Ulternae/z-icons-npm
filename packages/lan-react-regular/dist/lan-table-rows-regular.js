import React from 'react';

export function LanTableRowsRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M384 432H128V280h272v136c0 8.8-7.2 16-16 16m16-200H128V80h256c8.8 0 16 7.2 16 16zM0 416c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96z"})
  );
}

export default LanTableRowsRegular;
