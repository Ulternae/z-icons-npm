import React from 'react';

export function LanTicketPerforated({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 128c0-17.7 14.3-32 32-32h448c17.7 0 32 14.3 32 32v54.7c-28.2 12.3-48 40.5-48 73.3s19.8 61 48 73.3V384c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32zm32-64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64v-64c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6v-64c0-35.3-28.7-64-64-64zm352 120a24 24 0 1 0 0-48 24 24 0 1 0 0 48m0 96a24 24 0 1 0 0-48 24 24 0 1 0 0 48m24 72a24 24 0 1 0-48 0 24 24 0 1 0 48 0"})
  );
}

export default LanTicketPerforated;
