import React from 'react';

export const LanObjectsAlignLeft = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 16C0 7.2 7.2 0 16 0s16 7.2 16 16v480c0 8.8-7.2 16-16 16s-16-7.2-16-16zm160 160c0 8.8 7.2 16 16 16h288c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm-32-64c0-26.5 21.5-48 48-48h288c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H176c-26.5 0-48-21.5-48-48zm32 288c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm-32-64c0-26.5 21.5-48 48-48h160c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H176c-26.5 0-48-21.5-48-48z"})
);

export default LanObjectsAlignLeft;
