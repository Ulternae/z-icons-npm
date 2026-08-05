import React from 'react';

export function LanPlaneUpSlashSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 576 576.15',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"m434.8 368.9 72.1 24.1c10.4 3.5 21.1-4.3 21.1-15.2v-43.7c0-9-3.8-17.5-10.4-23.6L344 151.3V24c0-30.9-25.1-56-56-56s-56 25.1-56 56v127.3l-7.7 7.1L41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9zM153.5 223.3l-95.1 87.2c-6.6 6.1-10.4 14.6-10.4 23.6v43.7c0 10.9 10.7 18.6 21.1 15.2L232 338.7v99.7l-66 52.8c-3.8 3-6 7.6-6 12.5v19.8c0 10.4 9.8 18 19.9 15.5L288 512l108.1 27c10.1 2.5 19.9-5.1 19.9-15.5v-19.8c0-4.9-2.2-9.5-6-12.5l-66-52.8v-24.6z"})
  );
}

export default LanPlaneUpSlashSolid;
