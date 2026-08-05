import React from 'react';

export function LanSquareALockRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M96 80h320c8.8 0 16 7.2 16 16v52c10.2-2.6 21-4 32-4 5.4 0 10.8.3 16 1V96c0-35.3-28.7-64-64-64H96c-35.3 0-64 28.7-64 64v320c0 35.3 28.7 64 64 64h209.3c-.9-5.2-1.3-10.6-1.3-16.1V432H96c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16m181.5 77.3c-4.1-8.1-12.4-13.3-21.5-13.3s-17.4 5.1-21.5 13.3l-88 176c-5.9 11.9-1.1 26.3 10.7 32.2s26.3 1.1 32.2-10.7l9.4-18.7h110.6c5.4-15.4 14.7-29 26.6-39.6v-22l-58.5-117.1zM256 221.7l33.2 66.3h-66.3l33.2-66.3zm240 50.4V320h-64v-47.9c0-17.7 14.3-32 32-32s32 14.3 32 32M352 368v96c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48v-96c0-20.9-13.4-38.7-32-45.3v-50.6c0-44.2-35.8-80-80-80s-80 35.8-80 80v50.6c-18.6 6.6-32 24.4-32 45.3"})
  );
}

export default LanSquareALockRegular;
