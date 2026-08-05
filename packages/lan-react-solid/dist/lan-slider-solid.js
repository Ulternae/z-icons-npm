import React from 'react';

export function LanSliderSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M288 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v64h96c17.7 0 32 14.3 32 32s-14.3 32-32 32h-96v64c0 35.3-28.7 64-64 64h-32c-35.3 0-64-28.7-64-64zM0 256c0-17.7 14.3-32 32-32h208v64H32c-17.7 0-32-14.3-32-32"})
  );
}

export default LanSliderSolid;
