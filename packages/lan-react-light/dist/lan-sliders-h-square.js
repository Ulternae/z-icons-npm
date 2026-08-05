import React from 'react';

export function LanSlidersHSquare({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 416c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32H64c-17.7 0-32 14.3-32 32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm96 80c0-8.8 7.2-16 16-16h48v-24c0-8.8 7.2-16 16-16s16 7.2 16 16v24h144c8.8 0 16 7.2 16 16s-7.2 16-16 16H192v24c0 8.8-7.2 16-16 16s-16-7.2-16-16v-24h-48c-8.8 0-16-7.2-16-16m0 160c0-8.8 7.2-16 16-16h144v-24c0-8.8 7.2-16 16-16s16 7.2 16 16v24h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48v24c0 8.8-7.2 16-16 16s-16-7.2-16-16v-24H112c-8.8 0-16-7.2-16-16"})
  );
}

export default LanSlidersHSquare;
