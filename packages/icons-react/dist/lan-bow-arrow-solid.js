import React from 'react';

export const LanBowArrowSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M556.1-31.5c5.4-1.4 11.2.3 15.2 4.2s5.6 9.7 4.2 15.2l-32 128c-1.4 5.6-5.7 10-11.3 11.5s-11.5 0-15.6-4.1l-31.1-31.1-307.1 307.1 12.7 50.8.6 3.1c.8 7.2-1.7 14.5-6.9 19.7l-64 64c-6.1 6.1-15 8.5-23.4 6.2s-14.8-8.9-16.9-17.3l-12.5-50-50-12.5c-8.4-2.1-15-8.5-17.3-16.9S.9 429.1 7 423l64-64 2.3-2.1c5.8-4.4 13.3-6 20.4-4.2l50.8 12.7L451.6 58.3l-31-31c-4.1-4.1-5.6-10-4.1-15.6C418 6.2 422.4 1.8 428 .5l128-32zm-91.5 212.7c51.9 94.8 39.3 215.4-37.7 297.6 7.9 12.4 6.5 29-4.3 39.8-12.5 12.5-32.8 12.5-45.3 0L252.2 393.5l45.3-45.3 84.7 84.7c51.5-56.7 63-136.8 34.6-203.9zM65.2 117C147.4 40 268 27.5 362.8 79.3L315 127.2c-67.2-28.5-147.3-16.9-204 34.6l84.7 84.7-45.2 45.2L25.4 166.6c-12.5-12.5-12.5-32.8 0-45.2 10.8-10.8 27.4-12.2 39.8-4.3z"})
);

export default LanBowArrowSolid;
