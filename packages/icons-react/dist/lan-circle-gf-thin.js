import React from 'react';

export const LanCircleGfThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m192-112c35.3 0 64 28.7 64 64v8c0 4.4-3.6 8-8 8s-8-3.6-8-8v-8c0-26.5-21.5-48-48-48s-48 21.5-48 48v96c0 26.5 21.5 48 48 48s48-21.5 48-48v-16h-40c-4.4 0-8-3.6-8-8s3.6-8 8-8h48c4.4 0 8 3.6 8 8v24c0 35.3-28.7 64-64 64s-64-28.7-64-64v-96c0-35.3 28.7-64 64-64m96 8c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8s-3.6 8-8 8h-72v96h56c4.4 0 8 3.6 8 8s-3.6 8-8 8h-56v88c0 4.4-3.6 8-8 8s-8-3.6-8-8z"})
);

export default LanCircleGfThin;
