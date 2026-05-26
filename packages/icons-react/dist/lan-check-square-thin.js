import React from 'react';

export const LanCheckSquareThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M384 32c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64zM64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zm257.4 112.4c2.6-3.6 7.6-4.3 11.2-1.8s4.4 7.6 1.8 11.2L198.5 356.7c-1.4 1.9-3.5 3.1-5.8 3.3s-4.6-.7-6.3-2.3l-72-72c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l65.3 65.3z"})
);

export default LanCheckSquareThin;
