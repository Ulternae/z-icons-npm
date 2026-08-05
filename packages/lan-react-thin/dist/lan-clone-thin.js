import React from 'react';

export function LanCloneThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M288 496H64c-26.5 0-48-21.5-48-48V224c0-26.5 21.5-48 48-48h48v-16H64c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64v-48h-16v48c0 26.5-21.5 48-48 48M176 288V64c0-26.5 21.5-48 48-48h224c26.5 0 48 21.5 48 48v224c0 26.5-21.5 48-48 48H224c-26.5 0-48-21.5-48-48m-16 0c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224c-35.3 0-64 28.7-64 64z"})
  );
}

export default LanCloneThin;
