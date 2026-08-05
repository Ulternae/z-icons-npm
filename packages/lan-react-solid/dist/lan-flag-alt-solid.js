import React from 'react';

export function LanFlagAltSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32v448c0 17.7 14.3 32 32 32s32-14.3 32-32v-96h360c13.3 0 24-10.7 24-24 0-5.2-1.7-10.2-4.8-14.4L352 224l91.2-121.6c3.1-4.2 4.8-9.2 4.8-14.4 0-13.3-10.7-24-24-24H64z"})
  );
}

export default LanFlagAltSolid;
