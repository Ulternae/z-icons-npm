import React from 'react';

export const LanGifRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M80 112c-8.8 0-16 7.2-16 16v256c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16zm-64 16c0-35.3 28.7-64 64-64h416c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64zm136 88v80c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-32c0-13.3 10.7-24 24-24s24 10.7 24 24v32c0 30.9-25.1 56-56 56h-16c-30.9 0-56-25.1-56-56v-80c0-30.9 25.1-56 56-56h40c13.3 0 24 10.7 24 24s-10.7 24-24 24h-40c-4.4 0-8 3.6-8 8m144-56c13.3 0 24 10.7 24 24v144c0 13.3-10.7 24-24 24s-24-10.7-24-24V184c0-13.3 10.7-24 24-24m88 0h80c13.3 0 24 10.7 24 24s-10.7 24-24 24h-56v32h40c13.3 0 24 10.7 24 24s-10.7 24-24 24h-40v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V184c0-13.3 10.7-24 24-24"})
);

export default LanGifRegular;
