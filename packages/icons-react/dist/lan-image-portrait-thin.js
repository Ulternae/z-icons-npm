import React from 'react';

export const LanImagePortraitThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M320 16c26.5 0 48 21.5 48 48v384c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V64c0-26.5 21.5-48 48-48zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm128 144a48 48 0 1 1 0 96 48 48 0 1 1 0-96m0 112a64 64 0 1 0 0-128 64 64 0 1 0 0 128M96 360c0-30.9 25.1-56 56-56h80c30.9 0 56 25.1 56 56 0 4.4 3.6 8 8 8s8-3.6 8-8c0-39.8-32.2-72-72-72h-80c-39.8 0-72 32.2-72 72 0 4.4 3.6 8 8 8s8-3.6 8-8"})
);

export default LanImagePortraitThin;
