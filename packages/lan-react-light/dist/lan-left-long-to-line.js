import React from 'react';

export function LanLeftLongToLine({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 112c0-8.8 7.2-16 16-16s16 7.2 16 16v288c0 8.8-7.2 16-16 16s-16-7.2-16-16zm137.4 166.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9S320 115.1 320 128v64h272c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48H320v64c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128zM160 256l128 128v-80c0-8.8 7.2-16 16-16h288c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16H304c-8.8 0-16-7.2-16-16v-80z"})
  );
}

export default LanLeftLongToLine;
