import React from 'react';

export function LanBlindsOpenSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 32C14.3 32 0 46.3 0 64s14.3 32 32 32h80v232c0 13.3 10.7 24 24 24s24-10.7 24-24V96h256c17.7 0 32-14.3 32-32s-14.3-32-32-32zm384 192c17.7 0 32-14.3 32-32s-14.3-32-32-32H208v64zM32 160c-17.7 0-32 14.3-32 32s14.3 32 32 32h32v-64zm0 192h32v-64H32c-17.7 0-32 14.3-32 32s14.3 32 32 32m384-64H208v64h208c17.7 0 32-14.3 32-32s-14.3-32-32-32M32 480h384c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32"})
  );
}

export default LanBlindsOpenSolid;
