import React from 'react';

export const LanCircleGf = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m192-128c35.3 0 64 28.7 64 64v8c0 8.8-7.2 16-16 16s-16-7.2-16-16v-8c0-17.7-14.3-32-32-32s-32 14.3-32 32v128c0 17.7 14.3 32 32 32s32-14.3 32-32v-32h-16c-8.8 0-16-7.2-16-16s7.2-16 16-16h32c8.8 0 16 7.2 16 16v48c0 35.3-28.7 64-64 64s-64-28.7-64-64V192c0-35.3 28.7-64 64-64m96 16c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48v96h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v80c0 8.8-7.2 16-16 16s-16-7.2-16-16z"})
);

export default LanCircleGf;
