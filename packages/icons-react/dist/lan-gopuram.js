import React from 'react';

export const LanGopuram = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M112 0c8.8 0 16 7.2 16 16v16h64V16c0-8.8 7.2-16 16-16s16 7.2 16 16v16h64V16c0-8.8 7.2-16 16-16s16 7.2 16 16v16h64V16c0-8.8 7.2-16 16-16s16 7.2 16 16v144c26.5 0 48 21.5 48 48v80c26.5 0 48 21.5 48 48v128c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V336c0-26.5 21.5-48 48-48v-80c0-26.5 21.5-48 48-48V16c0-8.8 7.2-16 16-16m192 320H128v160h64v-48c0-35.3 28.7-64 64-64s64 28.7 64 64v48h64V320zm-16 112c0-17.7-14.3-32-32-32s-32 14.3-32 32v48h64zM128 64v96h80v-16c0-26.5 21.5-48 48-48s48 21.5 48 48v16h80V64zm112 96h32v-16c0-8.8-7.2-16-16-16s-16 7.2-16 16zm-32 32h-48v96h48v-16c0-26.5 21.5-48 48-48s48 21.5 48 48v16h48v-96zm-112 0c-8.8 0-16 7.2-16 16v80h48v-96zm176 96v-16c0-8.8-7.2-16-16-16s-16 7.2-16 16v16zm112-96v96h48v-80c0-8.8-7.2-16-16-16zm80 128h-48v160h48c8.8 0 16-7.2 16-16V336c0-8.8-7.2-16-16-16M96 480V320H48c-8.8 0-16 7.2-16 16v128c0 8.8 7.2 16 16 16z"})
);

export default LanGopuram;
