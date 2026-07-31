import React from 'react';

export const LanEnvelopeSquare = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm320 80H128c-8.8 0-16 7.2-16 16v8.5l104.4 55.1c2.3 1.2 5 1.9 7.6 1.9s5.3-.6 7.6-1.9L336 200.5V192c0-8.8-7.2-16-16-16M112 320c0 8.8 7.2 16 16 16h192c8.8 0 16-7.2 16-16v-83.3l-89.5 47.2c-7 3.7-14.7 5.6-22.5 5.6s-15.6-1.9-22.5-5.6L112 236.7zm16-176h192c26.5 0 48 21.5 48 48v128c0 26.5-21.5 48-48 48H128c-26.5 0-48-21.5-48-48V192c0-26.5 21.5-48 48-48"})
);

export default LanEnvelopeSquare;
