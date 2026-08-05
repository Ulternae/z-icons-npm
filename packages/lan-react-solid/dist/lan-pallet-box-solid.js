import React from 'react';

export function LanPalletBoxSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M176 0h224c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48H176c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48M0 352c0-17.7 14.3-32 32-32h512c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32v64h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h32v-64H32c-17.7 0-32-14.3-32-32m128 96h128v-64H128zm192 0h128v-64H320z"})
  );
}

export default LanPalletBoxSolid;
