import React from 'react';

export function LanTrashPlusSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -16 448 528',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M167.1-16H281c13.8 0 26 8.8 30.4 21.9L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64s14.3-32 32-32h96l8.7-26.1C141.1-7.2 153.3-16 167.1-16M32 144h384l-21.1 323.1c-1.6 25.3-22.6 44.9-47.9 44.9H101c-25.3 0-46.3-19.6-47.9-44.9zm192 80c-13.3 0-24 10.7-24 24v48h-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h48v48c0 13.3 10.7 24 24 24s24-10.7 24-24v-48h48c13.3 0 24-10.7 24-24s-10.7-24-24-24h-48v-48c0-13.3-10.7-24-24-24"})
  );
}

export default LanTrashPlusSolid;
