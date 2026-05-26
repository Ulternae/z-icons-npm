import React from 'react';

export const LanRectangleProRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M80 112c-8.8 0-16 7.2-16 16v256c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16zm-64 16c0-35.3 28.7-64 64-64h480c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64zm104 32h40c35.3 0 64 28.7 64 64s-28.7 64-64 64h-16v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V184c0-13.3 10.7-24 24-24m40 80c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v32zm120-80h36c37.6 0 68 30.4 68 68 0 17.4-6.5 33.2-17.2 45.3 10.8 12.6 17.2 28.9 17.2 46.7v8c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8c0-13.3-10.7-24-24-24h-8v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V184c0-13.3 10.7-24 24-24m32 88h4c11 0 20-9 20-20s-9-20-20-20h-12v40zm152-32v80c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8m8-56h16c30.9 0 56 25.1 56 56v80c0 30.9-25.1 56-56 56h-16c-30.9 0-56-25.1-56-56v-80c0-30.9 25.1-56 56-56"})
);

export default LanRectangleProRegular;
