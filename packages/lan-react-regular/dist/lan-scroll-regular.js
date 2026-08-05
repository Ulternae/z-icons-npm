import React from 'react';

export function LanScrollRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M48 112c0-17.7 14.3-32 32-32s32 14.3 32 32v48H48zm105.3-32H360c22.1 0 40 17.9 40 40v184H280c-30.9 0-56 25.1-56 56v40c0 17.7-14.3 32-32 32s-32-14.3-32-32V112c0-11.4-2.4-22.2-6.7-32M448 304V120c0-48.6-39.4-88-88-88H80C35.8 32 0 67.8 0 112v48c0 26.5 21.5 48 48 48h64v192c0 44.2 35.8 80 80 80h264c48.6 0 88-39.4 88-88v-32c0-30.9-25.1-56-56-56zm8 128H265.3c4.3-9.8 6.7-20.6 6.7-32v-40c0-4.4 3.6-8 8-8h208c4.4 0 8 3.6 8 8v32c0 22.1-17.9 40-40 40"})
  );
}

export default LanScrollRegular;
