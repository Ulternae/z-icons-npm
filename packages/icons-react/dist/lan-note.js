import React from 'react';

export const LanNote = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 448h192v-96c0-35.3 28.7-64 64-64h96V96c0-17.7-14.3-32-32-32H64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32m224-13.3L402.7 320H320c-17.7 0-32 14.3-32 32zM64 480c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v197.5c0 17-6.7 33.3-18.7 45.3L306.7 461.3c-12 12-28.3 18.7-45.3 18.7zm24-112a24 24 0 1 1 48 0 24 24 0 1 1-48 0m24-200a24 24 0 1 1 0-48 24 24 0 1 1 0 48m-24 88a24 24 0 1 1 48 0 24 24 0 1 1-48 0"})
);

export default LanNote;
