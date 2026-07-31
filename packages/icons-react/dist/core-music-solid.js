import React from 'react';

export const CoreMusicSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M395.8 15.7c41.4-13.8 84.2 17 84.2 60.7V384c0 53-43 96-96 96s-96-43-96-96 43-96 96-96c11.2 0 22 1.9 32 5.5v-89.1l-224 74.7V416c0 53-43 96-96 96S0 469 0 416s43-96 96-96c11.2 0 22 1.9 32 5.5V151.1c0-27.5 17.6-52 43.8-60.7z"})
);

export default CoreMusicSolid;
