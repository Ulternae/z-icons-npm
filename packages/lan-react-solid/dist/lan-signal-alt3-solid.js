import React from 'react';

export function LanSignalAlt3Solid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M320 160c0-17.7-14.3-32-32-32s-32 14.3-32 32v288c0 17.7 14.3 32 32 32s32-14.3 32-32zm-160 96c-17.7 0-32 14.3-32 32v160c0 17.7 14.3 32 32 32s32-14.3 32-32V288c0-17.7-14.3-32-32-32M32 384c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32s32-14.3 32-32v-32c0-17.7-14.3-32-32-32"})
  );
}

export default LanSignalAlt3Solid;
