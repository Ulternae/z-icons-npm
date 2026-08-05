import React from 'react';

export function LanPaintbrushPencilSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M557.3 109.3c25-25 25-65.5 0-90.5s-65.5-25-90.5 0L234.5 251c41.3 16.2 74.3 49.2 90.5 90.5zM176 512c61.9 0 112-50.1 112-112s-50.1-112-112-112S64 338.1 64 400c0 3.9.2 7.8.6 11.6 1.8 17.5-10.2 36.4-27.8 36.4H32c-17.7 0-32 14.3-32 32s14.3 32 32 32zm15.1-490.8C177.6 7.6 159.2 0 140 0s-37.6 7.6-51.1 21.2L53.2 56.9C39.6 70.4 32 88.8 32 108s7.6 37.6 21.2 51.1l85.3 85.3c12-2.9 24.6-4.4 37.5-4.4h1.6l116.2-116.2zm156 431.9c10.7 10.7 24.1 18.5 38.7 22.6l127.8 35.5c8.3 2.3 17.3 0 23.4-6.2s8.5-15.1 6.2-23.4l-35.6-127.8c-4.1-14.6-11.8-27.9-22.6-38.7l-32.9-32.9C378.3 356.1 339.6 394.8 336 398.4v1.6c0 12.9-1.5 25.5-4.4 37.5l15.5 15.5z"})
  );
}

export default LanPaintbrushPencilSolid;
