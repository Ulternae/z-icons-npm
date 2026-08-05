import React from 'react';

export function LanArrowRightFromLineSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 96c0-17.7-14.3-32-32-32S0 78.3 0 96v320c0 17.7 14.3 32 32 32s32-14.3 32-32zm438.6 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l73.4 73.4H160c-17.7 0-32 14.3-32 32s14.3 32 32 32h242.7l-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"})
  );
}

export default LanArrowRightFromLineSolid;
