import React from 'react';

export function LanSquareALockSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M96 32c-35.3 0-64 28.7-64 64v320c0 35.3 28.7 64 64 64h209.3c-.9-5.2-1.3-10.6-1.3-16.1v-96c0-11.2 1.9-21.9 5.4-31.9H198.8l-9.4 18.7c-5.9 11.9-20.3 16.7-32.2 10.7s-16.7-20.3-10.7-32.2l88-176c4.1-8.1 12.4-13.3 21.5-13.3s17.4 5.1 21.5 13.3L336 274.3V272c0-70.7 57.3-128 128-128 5.4 0 10.8.3 16 1V96c0-35.3-28.7-64-64-64zm160 189.7L222.8 288h66.3l-33.2-66.3zm240 50.4V320h-64v-47.9c0-17.7 14.3-32 32-32s32 14.3 32 32M352 368v96c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48v-96c0-20.9-13.4-38.7-32-45.3v-50.6c0-44.2-35.8-80-80-80s-80 35.8-80 80v50.6c-18.6 6.6-32 24.4-32 45.3"})
  );
}

export default LanSquareALockSolid;
