import React from 'react';

export function LanBreadLoaf({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M144 64h96c61.9 0 112 50.1 112 112v31c0 7.3-5 13.7-12.1 15.5l-7.8 1.9c-7.1 1.9-12.1 8.3-12.1 15.6v160c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48V240c0-7.3-5-13.7-12.1-15.5l-7.8-1.9C37 220.8 32 214.4 32 207v-31c0-61.9 50.1-112 112-112m-32 416h352c44.2 0 80-35.8 80-80V256c17.9-.4 32-15.4 31.3-33.3l-2.2-52.7c-3.2-77.1-66.7-138-143.9-138H144C64.5 32 0 96.5 0 176v31c0 20.5 13 38.5 32 45.3V400c0 44.2 35.8 80 80 80m352-32H336c10-13.4 16-30 16-48V256h160v144c0 26.5-21.5 48-48 48m64-224H380.9c2-5.3 3.1-11 3.1-17v-31c0-45.2-20.9-85.6-53.5-112h98.7c60 0 109.4 47.3 111.9 107.3l2.2 52.7z"})
  );
}

export default LanBreadLoaf;
