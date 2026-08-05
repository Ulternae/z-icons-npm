import React from 'react';

export function LanArrowUpToBracketSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 160V96c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32v64c0 17.7 14.3 32 32 32s32-14.3 32-32V96c0-53-43-96-96-96H96C43 0 0 43 0 96v64c0 17.7 14.3 32 32 32s32-14.3 32-32m182.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l73.4-73.4V480c0 17.7 14.3 32 32 32s32-14.3 32-32V269.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128z"})
  );
}

export default LanArrowUpToBracketSolid;
