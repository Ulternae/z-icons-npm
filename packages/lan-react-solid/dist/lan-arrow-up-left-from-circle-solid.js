import React from 'react';

export function LanArrowUpLeftFromCircleSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M192 0H32C14.3 0 0 14.3 0 32v160c0 17.7 14.3 32 32 32s32-14.3 32-32v-82.7l233.4 233.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 64H192c17.7 0 32-14.3 32-32S209.7 0 192 0m133.3 67.1c-17.4-2.9-33.9 8.8-36.9 26.3s8.8 33.9 26.3 36.9C390.3 143 448 208.8 448 288.1c0 88.4-71.6 160-160 160-79.2 0-145.1-57.6-157.8-133.3-2.9-17.4-19.4-29.2-36.9-26.3S64.1 307.9 67 325.4C84.9 431.3 177 512 288 512c123.7 0 224-100.3 224-224 0-111-80.7-203.1-186.7-220.9"})
  );
}

export default LanArrowUpLeftFromCircleSolid;
