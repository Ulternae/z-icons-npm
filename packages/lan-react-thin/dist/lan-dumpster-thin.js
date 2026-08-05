import React from 'react';

export function LanDumpsterThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M51.3 99.7C53.4 88.3 63.4 80 75 80h68.1l-21.8 160H45c-10 0-17.5-9-15.7-18.9zM137.4 240l21.8-160h121v160zM296.3 80H417l22.1 160H296.3zm136.9 0h68.4c11.6 0 21.5 8.3 23.6 19.7l22.1 121.4c1.8 9.8-5.8 18.9-15.7 18.9h-76.3zM75 64c-19.4 0-35.9 13.8-39.4 32.8L13.5 218.3c-3.4 18.5 9.8 35.6 28 37.5l38.9 217.6c.8 4.3 4.9 7.2 9.3 6.5s7.2-4.9 6.5-9.3l-4-22.6h392.3l-4 22.6c-.8 4.3 2.1 8.5 6.5 9.3s8.5-2.1 9.3-6.5L535 255.8c18.2-2 31.4-19.1 28-37.5L540.9 96.8c-3.5-19-20-32.8-39.4-32.8zm443.7 192-31.4 176h-398L57.9 256h460.9z"})
  );
}

export default LanDumpsterThin;
