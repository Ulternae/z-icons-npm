import React from 'react';

export const LanWaffle = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0M272 80v64h64v-32c0-8.8 7.2-16 16-16s16 7.2 16 16v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v64h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64v64h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32h-64v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64h-64v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16h32v-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h64v-64h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16h32v-32c0-8.8 7.2-16 16-16s16 7.2 16 16v32h64V80c0-8.8 7.2-16 16-16s16 7.2 16 16m-96 96v64h64v-64zm0 96v64h64v-64zm96 0v64h64v-64zm0-32h64v-64h-64z"})
);

export default LanWaffle;
