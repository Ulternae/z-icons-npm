import React from 'react';

export const LanClipboardCheck = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M248 0c22.3 0 41.6 13.1 50.6 32H320c35.3 0 64 28.7 64 64v352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h21.4c9-18.9 28.3-32 50.6-32zM64 64c-17.7 0-32 14.3-32 32v352c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32h-16.6c-3.9 27.1-27.2 48-55.4 48H136c-28.2 0-51.6-20.9-55.4-48zm195.1 154.2c5.2-7.1 15.2-8.7 22.3-3.5s8.7 15.2 3.5 22.3L179.3 382.2c-2.8 3.8-7.1 6.2-11.8 6.5s-9.3-1.4-12.6-4.8l-54.4-56.3c-6.1-6.4-6-16.5.4-22.6s16.5-5.9 22.6.4l41.2 42.6zM136 32c-13.3 0-24 10.7-24 24s10.7 24 24 24h112c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
);

export default LanClipboardCheck;
