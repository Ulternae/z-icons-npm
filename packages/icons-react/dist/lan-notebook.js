import React from 'react';

export const LanNotebook = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M192 32v448h-64c-17.7 0-32-14.3-32-32v-48h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H96v-96h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H96v-96h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H96V64c0-17.7 14.3-32 32-32zm32 0h192c17.7 0 32 14.3 32 32v384c0 17.7-14.3 32-32 32H224zM64 64v48H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 35.3 28.7 64 64 64h288c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H128C92.7 0 64 28.7 64 64"})
);

export default LanNotebook;
