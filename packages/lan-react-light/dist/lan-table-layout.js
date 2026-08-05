import React from 'react';

export function LanTableLayout({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M384 64c17.7 0 32 14.3 32 32v64H32V96c0-17.7 14.3-32 32-32zM32 416V192h96v256H64c-17.7 0-32-14.3-32-32m128 32V192h256v224c0 17.7-14.3 32-32 32zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64z"})
  );
}

export default LanTableLayout;
