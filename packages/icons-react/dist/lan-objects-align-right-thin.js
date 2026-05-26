import React from 'react';

export const LanObjectsAlignRightThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M512 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v496c0 4.4 3.6 8 8 8s8-3.6 8-8zM400 176c0 17.7-14.3 32-32 32H48c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32zm16-64c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v64c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48zm-16 288c0 17.7-14.3 32-32 32H176c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h192c17.7 0 32 14.3 32 32zm16-64c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h192c26.5 0 48-21.5 48-48z"})
);

export default LanObjectsAlignRightThin;
