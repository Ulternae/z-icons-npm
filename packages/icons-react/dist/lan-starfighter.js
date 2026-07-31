import React from 'react';

export const LanStarfighter = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M269.5 35C272 15 289 0 309.2 0h21.6C351 0 368 15 370.5 35l27.6 221c.6 0 1.2-.1 1.9-.1h48c17.7 0 32 14.3 32 32h96v-128h-16c-8.8 0-16-7.2-16-16s7.2-16 16-16h16v-32c0-8.8 7.2-16 16-16s16 7.2 16 16v32h16c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16v288c0 8.8-7.2 16-16 16s-16-7.2-16-16v-54.1l-96 48v6.1c0 17.7-14.3 32-32 32h-48c-8.2 0-15.6-3.1-21.3-8.1-7.6 5.1-16.8 8.1-26.7 8.1h-64c-9.9 0-19.1-3-26.7-8.1-5.7 5-13.1 8.1-21.3 8.1h-48c-17.7 0-32-14.3-32-32v-6.1l-96-48v54.1c0 8.8-7.2 16-16 16s-16-7.2-16-16v-288H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h16v-32c0-8.8 7.2-16 16-16s16 7.2 16 16v32h16c8.8 0 16 7.2 16 16s-7.2 16-16 16H64v128h96c0-17.7 14.3-32 32-32h48c.6 0 1.3 0 1.9.1zM576 320h-96v86.1l96-48zm-128 0v-32h-48v160h48zM64 358.1l96 48V320H64zM192 448h48V288h-48zm176-16V273L338.8 39c-.5-4-3.9-7-7.9-7h-21.6c-4 0-7.4 3-7.9 7L272 273v159c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16m-48-208c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64c0-8.8 7.2-16 16-16"})
);

export default LanStarfighter;
