import React from 'react';

export function LanBorderOuterRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm224 80a24 24 0 1 1 0-48 24 24 0 1 1 0 48m-80 80a24 24 0 1 1-48 0 24 24 0 1 1 48 0m80 24a24 24 0 1 1 0-48 24 24 0 1 1 0 48m128-24a24 24 0 1 1-48 0 24 24 0 1 1 48 0M224 384a24 24 0 1 1 0-48 24 24 0 1 1 0 48"})
  );
}

export default LanBorderOuterRegular;
