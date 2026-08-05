import React from 'react';

export function LanTabletScreenButtonSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 64C0 28.7 28.7 0 64 0h320c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm256 368a32 32 0 1 0-64 0 32 32 0 1 0 64 0M384 64H64v288h320z"})
  );
}

export default LanTabletScreenButtonSolid;
