import React from 'react';

export const LanObjectsAlignRight = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M512 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v480c0 8.8 7.2 16 16 16s16-7.2 16-16zM352 176c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16zm32-64c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v64c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48zm-32 288c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16zm32-64c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48z"})
);

export default LanObjectsAlignRight;
