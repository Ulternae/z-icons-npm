import React from 'react';

export const LanGameBoardAltThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M390.5 32.3C422.8 35.6 448 62.9 448 96v320l-.3 6.5c-3.1 30.1-27 54.1-57.1 57.1l-6.5.3h-320l-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416V96c0-33.1 25.2-60.4 57.5-63.7L64 32h320zM64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zm291.3 48.2c16.1 1.6 28.7 15.2 28.7 31.8v256l-.2 3.3c-1.5 15.1-13.5 27-28.6 28.6l-3.3.2h-256l-3.3-.2c-15.1-1.5-27-13.5-28.6-28.6V128c0-16.6 12.6-30.2 28.7-31.8L96 96h256zM232 400h120c8.8 0 16-7.2 16-16V264H232zM80 384c0 8.8 7.2 16 16 16h120V264H80zm152-136h136V128c0-8.8-7.2-16-16-16H232zM96 112c-8.8 0-16 7.2-16 16v120h136V112z"})
);

export default LanGameBoardAltThin;
