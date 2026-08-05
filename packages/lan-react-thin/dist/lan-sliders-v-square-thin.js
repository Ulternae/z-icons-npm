import React from 'react';

export function LanSlidersVSquareThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M384 48c26.5 0 48 21.5 48 48v320c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm72 64c-4.4 0-8 3.6-8 8v56h-24c-17.7 0-32 14.3-32 32s14.3 32 32 32h24v184c0 4.4 3.6 8 8 8s8-3.6 8-8V224h24c17.7 0 32-14.3 32-32s-14.3-32-32-32h-24v-56c0-4.4-3.6-8-8-8m0 112h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16h64c8.8 0 16 7.2 16 16s-7.2 16-16 16zm184-104c0-4.4-3.6-8-8-8s-8 3.6-8 8v184h-24c-17.7 0-32 14.3-32 32s14.3 32 32 32h24v56c0 4.4 3.6 8 8 8s8-3.6 8-8v-56h24c17.7 0 32-14.3 32-32s-14.3-32-32-32h-24zm24 232h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16h64c8.8 0 16 7.2 16 16s-7.2 16-16 16"})
  );
}

export default LanSlidersVSquareThin;
