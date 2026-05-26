import React from 'react';

export const LanTripleChevronsLeft = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M151.7 98.6c6.2-4.1 14.7-3.4 20.1 2.1 5.5 5.5 6.2 13.9 2.1 20.1l-2.1 2.5L39.1 256l132.7 132.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-144-144-2.1-2.5c-4.1-6.2-3.4-14.7 2.1-20.1l144-144zm192 0c6.2-4.1 14.7-3.4 20.1 2.1s6.2 13.9 2.1 20.1l-2.1 2.5L231.1 256l132.7 132.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-144-144-2.1-2.5c-4.1-6.2-3.4-14.7 2.1-20.1l144-144zm192 0c6.2-4.1 14.7-3.4 20.1 2.1s6.2 13.9 2.1 20.1l-2.1 2.5L423.1 256l132.7 132.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-144-144-2.1-2.5c-4.1-6.2-3.4-14.7 2.1-20.1l144-144z"})
);

export default LanTripleChevronsLeft;
