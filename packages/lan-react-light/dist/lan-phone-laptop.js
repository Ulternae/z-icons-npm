import React from 'react';

export function LanPhoneLaptop({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M96 64c0-17.7 14.3-32 32-32h288c17.7 0 32 14.3 32 32v48h32V64c0-35.3-28.7-64-64-64H128C92.7 0 64 28.7 64 64v176H22.4C10 240 0 250 0 262.4 0 311.9 40.1 352 89.6 352H272v-32H89.6c-28.5 0-52.2-20.8-56.8-48H272v-32H96zm288 416c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32v224c0 17.7-14.3 32-32 32zm0-320c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h96c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64zm32 256c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16z"})
  );
}

export default LanPhoneLaptop;
