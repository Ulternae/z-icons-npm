import React from 'react';

export function LanBorderOuterSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 96v320h320V96zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm224 80a24 24 0 1 1 0-48 24 24 0 1 1 0 48m-80 80a24 24 0 1 1-48 0 24 24 0 1 1 48 0m80 24a24 24 0 1 1 0-48 24 24 0 1 1 0 48m128-24a24 24 0 1 1-48 0 24 24 0 1 1 48 0M224 384a24 24 0 1 1 0-48 24 24 0 1 1 0 48"})
  );
}

export default LanBorderOuterSolid;
