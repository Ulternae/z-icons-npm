import React from 'react';

export const LanMobileRetroRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M80 48c-8.8 0-16 7.2-16 16v384c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16zM16 64C16 28.7 44.7 0 80 0h224c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64zm128 32h96c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32M96 312a24 24 0 1 1 48 0 24 24 0 1 1-48 0m24 104c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24m48-104a24 24 0 1 1 48 0 24 24 0 1 1-48 0m24 104c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24m48-104a24 24 0 1 1 48 0 24 24 0 1 1-48 0m24 104c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24"})
);

export default LanMobileRetroRegular;
