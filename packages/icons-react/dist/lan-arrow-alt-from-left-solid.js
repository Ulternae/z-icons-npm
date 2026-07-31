import React from 'react';

export const LanArrowAltFromLeftSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M32 64c17.7 0 32 14.3 32 32v320c0 17.7-14.3 32-32 32S0 433.7 0 416V96c0-17.7 14.3-32 32-32m473 175c9.4 9.4 9.4 24.6 0 33.9L361 417c-6.9 6.9-17.2 8.9-26.2 5.2S320 409.7 320 400v-80H176c-26.5 0-48-21.5-48-48v-32c0-26.5 21.5-48 48-48h144v-80c0-9.7 5.8-18.5 14.8-22.2s19.3-1.6 26.2 5.2z"})
);

export default LanArrowAltFromLeftSolid;
