import React from 'react';

export function LanCanFoodSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M270.3 304.5c12.1-2.5 23.4-5.5 33.7-9V426c-2.8 1.6-6.6 3.6-11.8 5.7-22.4 9.2-57.8 16.3-100.2 16.3s-77.8-7.1-100.2-16.3c-5.2-2.1-9-4.1-11.8-5.7V295.6c10.3 3.5 21.6 6.5 33.7 9 7.6 36.3 39.8 63.5 78.3 63.5s70.7-27.2 78.3-63.5zm-100.1-40a32 32 0 1 1 43.5 46.9 32 32 0 1 1-43.5-46.9M16 72v368c0 39.8 78.8 72 176 72s176-32.2 176-72V72c0-39.8-78.8-72-176-72S16 32.2 16 72m288 0c0 13.3-50.1 24-112 24S80 85.3 80 72s50.1-24 112-24 112 10.7 112 24"})
  );
}

export default LanCanFoodSolid;
