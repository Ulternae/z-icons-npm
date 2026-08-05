import React from 'react';

export function LanAlbumCirclePlusSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v118c-15.3-3.9-31.4-6-48-6-7.8 0-15.4.5-22.9 1.4C389.1 143.8 328.1 96 256 96c-88.4 0-160 71.6-160 160 0 83.2 63.5 151.5 144.6 159.3 1.8 23 7.6 44.8 16.8 64.7H96c-35.3 0-64-28.7-64-64zm224 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64m176 32a144 144 0 1 1 0 288 144 144 0 1 1 0-288m16 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48z"})
  );
}

export default LanAlbumCirclePlusSolid;
