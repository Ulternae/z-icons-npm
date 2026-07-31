import React from 'react';

export const LanTimesToSlot = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M560 288c8.8 0 16 7.2 16 16v112c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V304c0-8.8 7.2-16 16-16s16 7.2 16 16v112c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V304c0-8.8 7.2-16 16-16M416 32c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64zM160 64c-17.7 0-32 14.3-32 32v224c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm172.7 76.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L310.6 208l44.7 44.7c6.2 6.3 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L288 230.6l-44.7 44.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l44.7-44.7-44.7-44.7c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l44.7 44.7z"})
);

export default LanTimesToSlot;
