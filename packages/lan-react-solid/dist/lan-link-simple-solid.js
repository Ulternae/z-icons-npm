import React from 'react';

export function LanLinkSimpleSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 256C0 150 86 64 192 64h32c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32c-70.7 0-128 57.3-128 128s57.3 128 128 128h32c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32C86 448 0 362 0 256m576 0c0 106-86 192-192 192h-32c-17.7 0-32-14.3-32-32s14.3-32 32-32h32c70.7 0 128-57.3 128-128s-57.3-128-128-128h-32c-17.7 0-32-14.3-32-32s14.3-32 32-32h32c106 0 192 86 192 192m-384-32h192c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32"})
  );
}

export default LanLinkSimpleSolid;
