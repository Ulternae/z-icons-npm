import React from 'react';

export function LanDiagramPrevious({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M384 224c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64h34c-2.7-10.5-2.7-21.5 0-32H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-34c2.7 10.5 2.7 21.5 0 32zM32 352c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32zm32-64c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64v-64c0-35.3-28.7-64-64-64H240V182.6l36.7 36.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-64-64c-6.2-6.2-16.4-6.2-22.6 0l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l36.7-36.7V288z"})
  );
}

export default LanDiagramPrevious;
