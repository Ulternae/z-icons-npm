import React from 'react';

export function LanChairOfficeThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M128 16c-26.5 0-48 21.5-48 48v192h224V64c0-26.5-21.5-48-48-48zm192 48v192h16c26.5 0 48 21.5 48 48v48c0 26.5-21.5 48-48 48H200v96h80c4.4 0 8 3.6 8 8s-3.6 8-8 8H104c-4.4 0-8-3.6-8-8s3.6-8 8-8h80v-96H48c-26.5 0-48-21.5-48-48v-48c0-26.5 21.5-48 48-48h16V64c0-35.3 28.7-64 64-64h128c35.3 0 64 28.7 64 64M48 272c-17.7 0-32 14.3-32 32v48c0 17.7 14.3 32 32 32h288c17.7 0 32-14.3 32-32v-48c0-17.7-14.3-32-32-32zM16 136v80c0 4.4-3.6 8-8 8s-8-3.6-8-8v-80c0-4.4 3.6-8 8-8s8 3.6 8 8m368 0v80c0 4.4-3.6 8-8 8s-8-3.6-8-8v-80c0-4.4 3.6-8 8-8s8 3.6 8 8"})
  );
}

export default LanChairOfficeThin;
