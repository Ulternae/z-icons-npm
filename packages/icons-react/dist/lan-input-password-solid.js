import React from 'react';

export const LanInputPasswordSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M512 64c35.3 0 64 28.7 64 64v256l-.3 6.5c-3.1 30.1-27 54.1-57.1 57.1l-6.5.3h-448l-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 384V128c0-35.3 28.7-64 64-64zM64 384h448V128H64zm376-224c13.3 0 24 10.7 24 24v144c0 13.3-10.7 24-24 24s-24-10.7-24-24V184c0-13.3 10.7-24 24-24M144 288a32 32 0 1 1 0-64 32 32 0 1 1 0 64m96 0a32 32 0 1 1 0-64 32 32 0 1 1 0 64m96 0a32 32 0 1 1 0-64 32 32 0 1 1 0 64"})
);

export default LanInputPasswordSolid;
