import React from 'react';

export const LanFolderCheck = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M202.7 32c13.8 0 27.3 4.5 38.4 12.8l38.4 28.8c5.5 4.2 12.3 6.4 19.2 6.4H448c35.3 0 64 28.7 64 64v240c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64zM64 64c-17.7 0-32 14.3-32 32v288c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32H298.7c-13.8 0-27.3-4.5-38.4-12.8l-38.4-28.8c-5.5-4.2-12.3-6.4-19.2-6.4zm259.1 122.2c5.2-7.1 15.2-8.7 22.3-3.5s8.7 15.2 3.5 22.3L243.3 350.2c-2.8 3.8-7.1 6.2-11.8 6.5s-9.3-1.4-12.6-4.8l-54.4-56.3c-6.1-6.4-6-16.5.4-22.6s16.5-5.9 22.6.4l41.2 42.6z"})
);

export default LanFolderCheck;
