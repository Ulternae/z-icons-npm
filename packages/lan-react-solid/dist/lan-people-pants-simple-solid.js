import React from 'react';

export function LanPeoplePantsSimpleSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M96 128A64 64 0 1 0 96 0a64 64 0 1 0 0 128m-32 32c-35.3 0-64 28.7-64 64v64c0 23.7 12.9 44.4 32 55.4V464c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V343.4c19.1-11.1 32-31.7 32-55.4v-64c0-35.3-28.7-64-64-64zm288-32a64 64 0 1 0 0-128 64 64 0 1 0 0 128m-32 32c-35.3 0-64 28.7-64 64v64c0 23.7 12.9 44.4 32 55.4V464c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V343.4c19.1-11.1 32-31.7 32-55.4v-64c0-35.3-28.7-64-64-64z"})
  );
}

export default LanPeoplePantsSimpleSolid;
