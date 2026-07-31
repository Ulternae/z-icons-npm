import React from 'react';

export const LanWindowRestoreThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M512 48H224c-26.5 0-48 21.5-48 48v16h-16V96c0-35.3 28.7-64 64-64h288c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64h-48v-16h48c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48M352 176H64c-26.5 0-48 21.5-48 48v48h384v-48c0-26.5-21.5-48-48-48m48 112H16v128c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48zM64 160h288c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64"})
);

export default LanWindowRestoreThin;
