import React from 'react';

export function LanSink({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M272 80c0-26.5 21.5-48 48-48s48 21.5 48 48v32c0 8.8 7.2 16 16 16s16-7.2 16-16V80c0-44.2-35.8-80-80-80s-80 35.8-80 80v208h-80v-16c0-26.5-21.5-48-48-48H48c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16 7.2 16 16v16H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v80c0 61.9 50.1 112 112 112h224c61.9 0 112-50.1 112-112v-80h16c8.8 0 16-7.2 16-16s-7.2-16-16-16H384v-16c0-8.8 7.2-16 16-16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64c-26.5 0-48 21.5-48 48v16h-80zm176 240v80c0 44.2-35.8 80-80 80H144c-44.2 0-80-35.8-80-80v-80z"})
  );
}

export default LanSink;
