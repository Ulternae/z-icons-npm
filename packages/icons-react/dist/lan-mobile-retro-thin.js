import React from 'react';

export const LanMobileRetroThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M80 16c-26.5 0-48 21.5-48 48v384c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V64c0-26.5-21.5-48-48-48zM16 64C16 28.7 44.7 0 80 0h224c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64zm112 8c0-4.4 3.6-8 8-8h112c4.4 0 8 3.6 8 8s-3.6 8-8 8H136c-4.4 0-8-3.6-8-8m128 72H128c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16m-128-16h128c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32m128 208a16 16 0 1 1 32 0 16 16 0 1 1-32 0m-144-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32m16 96c0 8.8-7.2 16-16 16s-16-7.2-16-16 7.2-16 16-16 16 7.2 16 16m64-96a16 16 0 1 1 0 32 16 16 0 1 1 0-32m16 96c0 8.8-7.2 16-16 16s-16-7.2-16-16 7.2-16 16-16 16 7.2 16 16m64 16c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16"})
);

export default LanMobileRetroThin;
