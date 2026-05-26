import React from 'react';

export const LanArrowAltToLeftSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M32 448c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32s32 14.3 32 32v320c0 17.7-14.3 32-32 32m103-175c-9.4-9.4-9.4-24.6 0-33.9L279 95c6.9-6.9 17.2-8.9 26.2-5.2S320 102.3 320 112v80h144c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48H320v80c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2z"})
);

export default LanArrowAltToLeftSolid;
