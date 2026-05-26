import React from 'react';

export const LanFenceRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M48 432h48V130.4l-24-26.7-24 26.7zM8.2 102.9l51.9-57.7c6.4-7.1 17.4-7.1 23.8 0l51.9 57.7c5.3 5.9 8.2 13.5 8.2 21.4v37.1h40v-37.1c0-7.9 2.9-15.5 8.2-21.4l51.9-57.7c6.4-7.1 17.4-7.1 23.8 0l51.9 57.7c5.3 5.9 8.2 13.5 8.2 21.4v37.1h40v-37.1c0-7.9 2.9-15.5 8.2-21.4l51.9-57.7c6.4-7.1 17.4-7.1 23.8 0l51.9 57.7c5.3 5.9 8.2 13.5 8.2 21.4V448c0 17.7-14.3 32-32 32h-80c-17.7 0-32-14.3-32-32v-48h-40v48c0 17.7-14.3 32-32 32h-80c-17.7 0-32-14.3-32-32v-48h-40v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V124.3c0-7.9 2.9-15.5 8.2-21.4M368 352V209.4h-40V352zM144 209.4V352h40V209.4zm88-79V432h48V130.4l-24-26.7zM416 432h48V130.4l-24-26.7-24 26.7z"})
);

export default LanFenceRegular;
