import React from 'react';

export function LanTruckFlatbedThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M384 112c-8.8 0-16 7.2-16 16v112h189.1c-.8-2.1-1.8-4.2-2.9-6.2l-53.9-97.1c-8.5-15.2-24.5-24.7-42-24.7zm-32 128V128c0-17.7 14.3-32 32-32h74.3c23.2 0 44.7 12.6 55.9 32.9l54 97.1c4.8 8.7 7.8 18.9 7.8 30v96c0 35.3-28.7 64-64 64h-3.3c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64H236.7c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64H48c-26.5 0-48-21.5-48-48v-80c0-26.5 21.5-48 48-48zm208 16H48c-17.7 0-32 14.3-32 32v80c0 17.7 14.3 32 32 32h16.4c-.2-2.6-.4-5.3-.4-8 0-48.6 39.4-88 88-88s88 39.4 88 88c0 2.7-.1 5.4-.4 8h96.7c-.2-2.6-.4-5.3-.4-8 0-48.6 39.4-88 88-88s88 39.4 88 88c0 2.7-.1 5.4-.4 8h.4c26.5 0 48-21.5 48-48v-96zM224 392a72 72 0 1 0-144 0 72 72 0 1 0 144 0m200 72a72 72 0 1 0 0-144 72 72 0 1 0 0 144"})
  );
}

export default LanTruckFlatbedThin;
