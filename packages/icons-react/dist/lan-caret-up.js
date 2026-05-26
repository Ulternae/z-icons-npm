import React from 'react';

export const LanCaretUp = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M137.9 137.4c12.9-11.6 32.4-12.8 45.2 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9l-2.2 4.3c-5.7 9.5-16.1 15.5-27.4 15.5h-256l-4.8-.3c-9.4-1.4-17.7-7-22.6-15.1l-2.2-4.3C-1.4 289.8.2 277.9 6.7 269l3.1-3.7 128-128zm22.7 23c-.3.1-.7.3-1.1.7L32.5 288h256L160.8 160.3c-.1 0-.2.1-.2.1"})
);

export default LanCaretUp;
