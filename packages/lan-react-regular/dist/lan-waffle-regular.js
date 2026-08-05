import React from 'react';

export function LanWaffleRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0M272 88v56h64v-32c0-8.8 7.2-16 16-16s16 7.2 16 16v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v64h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v64h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32h-64v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64h-64v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16h32v-64h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16h32v-64h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16h32v-32c0-8.8 7.2-16 16-16s16 7.2 16 16v32h64V88c0-8.8 7.2-16 16-16s16 7.2 16 16m-96 88v64h64v-64zm0 96v64h64v-64zm96 0v64h64v-64zm0-32h64v-64h-64z"})
  );
}

export default LanWaffleRegular;
