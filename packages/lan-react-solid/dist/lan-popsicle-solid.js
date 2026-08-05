import React from 'react';

export function LanPopsicleSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 320 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M160 0C71.6 0 0 71.6 0 160v176c0 26.5 21.5 48 48 48h80v96c0 17.7 14.3 32 32 32s32-14.3 32-32v-96h80c26.5 0 48-21.5 48-48V160C320 71.6 248.4 0 160 0"})
  );
}

export default LanPopsicleSolid;
