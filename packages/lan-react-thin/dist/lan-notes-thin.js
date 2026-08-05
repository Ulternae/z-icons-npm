import React from 'react';

export function LanNotesThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M160 400c-26.5 0-48-21.5-48-48V64c0-26.5 21.5-48 48-48h288c26.5 0 48 21.5 48 48v165.5q0 5.4-1.2 10.5H392c-30.9 0-56 25.1-56 56v102.8q-5.1 1.2-10.5 1.2zm328-144c-1.8 2.7-3.8 5.1-6.1 7.4L359.4 385.9c-2.3 2.3-4.8 4.3-7.4 6.1v-96c0-22.1 17.9-40 40-40zM96 352c0 35.3 28.7 64 64 64h165.5c17 0 33.3-6.7 45.3-18.7l122.5-122.6c12-12 18.7-28.3 18.7-45.3V64c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64zM8 96c-4.4 0-8 3.6-8 8v352c0 30.9 25.1 56 56 56h288c4.4 0 8-3.6 8-8s-3.6-8-8-8H56c-22.1 0-40-17.9-40-40V104c0-4.4-3.6-8-8-8m216 208a16 16 0 1 0-32 0 16 16 0 1 0 32 0M208 96a16 16 0 1 0 0 32 16 16 0 1 0 0-32m16 112a16 16 0 1 0-32 0 16 16 0 1 0 32 0"})
  );
}

export default LanNotesThin;
