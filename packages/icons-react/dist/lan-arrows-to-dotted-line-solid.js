import React from 'react';

export const LanArrowsToDottedLineSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m278.6 102.6-64 64c-12.5 12.5-32.8 12.5-45.3 0l-64-64c-9.2-9.2-11.9-22.9-6.9-34.9S115.1 48 128 48h32V0c0-17.7 14.3-32 32-32s32 14.3 32 32v48h32c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9zm0 306.7c9.2 9.2 11.9 22.9 6.9 34.9S268.9 464 256 464h-32v48c0 17.7-14.3 32-32 32s-32-14.3-32-32v-48h-32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l64-64c12.5-12.5 32.8-12.5 45.3 0zM64 256a32 32 0 1 1-64 0 32 32 0 1 1 64 0m74.7 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64m138.7-32a32 32 0 1 1-64 0 32 32 0 1 1 64 0m74.6 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64"})
);

export default LanArrowsToDottedLineSolid;
