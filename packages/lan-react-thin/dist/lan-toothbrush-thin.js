import React from 'react';

export function LanToothbrushThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 208c-26.5 0-48-21.5-48-48s21.5-48 48-48h224c20.2 0 35.1-7.8 44.3-21.7 8.3-12.5 10.5-28.2 11.3-41.4v-.1c23.4 2.6 45.7 10.8 61.9 24C421.6 85.9 432 104 432 127.9c0 44.2-35.8 80-80 80zM0 160c0 35.3 28.7 64 64 64h288c53 0 96-43 96-96 0-58.5-51.6-89.9-104-95.2-8.8-.9-15.8 6.4-16.4 15.2-1.5 25.3-8.4 48-39.6 48H64c-35.3 0-64 28.7-64 64m64 104c0-4.4-3.6-8-8-8s-8 3.6-8 8v152H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h536c4.4 0 8-3.6 8-8s-3.6-8-8-8H32c-8.8 0-16-7.2-16-16s7.2-16 16-16h536c4.4 0 8-3.6 8-8s-3.6-8-8-8H384V264c0-4.4-3.6-8-8-8s-8 3.6-8 8v152h-48V264c0-4.4-3.6-8-8-8s-8 3.6-8 8v152h-48V264c0-4.4-3.6-8-8-8s-8 3.6-8 8v152h-48V264c0-4.4-3.6-8-8-8s-8 3.6-8 8v152h-48V264c0-4.4-3.6-8-8-8s-8 3.6-8 8v152H64z"})
  );
}

export default LanToothbrushThin;
