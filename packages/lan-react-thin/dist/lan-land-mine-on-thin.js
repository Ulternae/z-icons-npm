import React from 'react';

export function LanLandMineOnThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -8 576 520',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M296 0c0-4.4-3.6-8-8-8s-8 3.6-8 8v128c0 4.4 3.6 8 8 8s8-3.6 8-8zm104 288v64H176v-64c0-8.8 7.2-16 16-16h192c8.8 0 16 7.2 16 16m-240 0v64H80c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48h-80v-64c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32m240 80h96c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H80c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32zM25.3 123.6c-2.5 3.7-1.5 8.6 2.2 11.1l96 64c3.7 2.5 8.6 1.5 11.1-2.2s1.5-8.6-2.2-11.1l-96-64c-3.7-2.5-8.6-1.5-11.1 2.2m514.2-2.2-96 64c-3.7 2.5-4.7 7.4-2.2 11.1s7.4 4.7 11.1 2.2l96-64c3.7-2.5 4.7-7.4 2.2-11.1s-7.4-4.7-11.1-2.2"})
  );
}

export default LanLandMineOnThin;
