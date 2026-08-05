import React from 'react';

export function LanLinkSimple({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 256C0 150 86 64 192 64h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48c-88.4 0-160 71.6-160 160s71.6 160 160 160h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48C86 448 0 362 0 256m160 0c0-8.8 7.2-16 16-16h224c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16M384 64c106 0 192 86 192 192s-86 192-192 192h-48c-8.8 0-16-7.2-16-16s7.2-16 16-16h48c88.4 0 160-71.6 160-160S472.4 96 384 96h-48c-8.8 0-16-7.2-16-16s7.2-16 16-16z"})
  );
}

export default LanLinkSimple;
