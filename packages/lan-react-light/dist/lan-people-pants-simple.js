import React from 'react';

export function LanPeoplePantsSimple({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M96 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 96A64 64 0 1 0 96 0a64 64 0 1 0 0 128m32 64c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32zm-64-32c-35.3 0-64 28.7-64 64v64c0 23.7 12.9 44.4 32 55.4V496c0 8.8 7.2 16 16 16s16-7.2 16-16V352h64v144c0 8.8 7.2 16 16 16s16-7.2 16-16V343.4c19.1-11.1 32-31.7 32-55.4v-64c0-35.3-28.7-64-64-64zM352 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 96a64 64 0 1 0 0-128 64 64 0 1 0 0 128m32 64c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32zm-64-32c-35.3 0-64 28.7-64 64v64c0 23.7 12.9 44.4 32 55.4V496c0 8.8 7.2 16 16 16s16-7.2 16-16V352h64v144c0 8.8 7.2 16 16 16s16-7.2 16-16V343.4c19.1-11.1 32-31.7 32-55.4v-64c0-35.3-28.7-64-64-64z"})
  );
}

export default LanPeoplePantsSimple;
