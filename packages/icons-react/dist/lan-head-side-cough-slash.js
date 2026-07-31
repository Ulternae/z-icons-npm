import React from 'react';

export const LanHeadSideCoughSlash = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 576 576.05',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M320.1 201.4 548.7-27.2c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-544 544c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l31-31q.9-1.05 2.1-2.1l205.9-205.9c.6-.8 1.4-1.5 2.1-2.1l51.6-51.6-54.4-54.4c-2.5-2.5-4.1-5.8-4.6-9.3C226.8 70.1 149.8.2 56.4 0H56c-8.8 0-16-7.2-16-16s7.2-16 16-16c108 0 197.5 79.3 213.5 182.8zM206 428.5l29.9-29.9 21.2 1.5c8.4.6 14.9 7.6 14.9 16v16c0 44.2-35.8 80-80 80h-69.5l32-32H192c26.5 0 48-21.5 48-48V431l-34-2.4zM152 160a24 24 0 1 1 0 48 24 24 0 1 1 0-48m360 104a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-88 72a24 24 0 1 1 48 0 24 24 0 1 1-48 0m-64 48a24 24 0 1 1 48 0 24 24 0 1 1-48 0m128 0a24 24 0 1 1 48 0 24 24 0 1 1-48 0m24 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-88-24a24 24 0 1 1 48 0 24 24 0 1 1-48 0"})
);

export default LanHeadSideCoughSlash;
