import React from 'react';

export const LanImagePortrait = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M320 32c17.7 0 32 14.3 32 32v384c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm128 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 96a64 64 0 1 0 0-128 64 64 0 1 0 0 128m-80 112c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48 0 8.8 7.2 16 16 16s16-7.2 16-16c0-44.2-35.8-80-80-80h-64c-44.2 0-80 35.8-80 80 0 8.8 7.2 16 16 16s16-7.2 16-16"})
);

export default LanImagePortrait;
