import React from 'react';

export const LanGameBoardAlt = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M390.5 32.3C422.8 35.6 448 62.9 448 96v320l-.3 6.5c-3.1 30.1-27 54.1-57.1 57.1l-6.5.3h-320l-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416V96c0-33.1 25.2-60.4 57.5-63.7L64 32h320zM64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm291.3 32.2c16.1 1.6 28.7 15.2 28.7 31.8v256l-.2 3.3c-1.5 15.1-13.5 27-28.6 28.6l-3.3.2h-256l-3.3-.2c-15.1-1.5-27-13.5-28.6-28.6V128c0-16.6 12.6-30.2 28.7-31.8L96 96h256zM240 384h112V272H240zm-144 0h112V272H96zm144-144h112V128H240zm-144 0h112V128H96z"})
);

export default LanGameBoardAlt;
