import React from 'react';

export const LanCaravanRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M416 80c44.2 0 80 35.8 80 80v208h-48V176c0-26.5-21.5-48-48-48h-48c-26.5 0-48 21.5-48 48v192h-12.1c-16.1-19.5-40.6-32-67.9-32s-51.7 12.5-67.9 32H96c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zM96 416h40.4c-.2 2.6-.4 5.3-.4 8 0 48.6 39.4 88 88 88s88-39.4 88-88c0-2.7-.1-5.4-.4-8H616c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72V160c0-70.7-57.3-128-128-128H96c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64m256-48V176h48v192zM160 128c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32zm64 256a40 40 0 1 1 0 80 40 40 0 1 1 0-80"})
);

export default LanCaravanRegular;
