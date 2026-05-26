import React from 'react';

export const LanFolderOpen = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M97.5 416c-10.8 0-18.5-10.5-15.3-20.8l50-160c2.1-6.7 8.3-11.2 15.3-11.2H527c10.8 0 18.5 10.5 15.3 20.8l-50 160c-2.2 6.7-8.3 11.2-15.3 11.2zm126.7 32H477c21 0 39.6-13.6 45.8-33.7l50-160c9.7-30.9-13.4-62.3-45.8-62.3H147.6c-21 0-39.6 13.6-45.8 33.7L64.2 345.6V96c0-17.7 14.3-32 32-32h138.7c6.9 0 13.7 2.2 19.2 6.4l38.4 28.8c11.1 8.3 24.6 12.8 38.4 12.8h117.3c17.7 0 32 14.3 32 32h32c0-35.3-28.7-64-64-64H330.9c-6.9 0-13.7-2.2-19.2-6.4l-38.4-28.8C262.2 36.5 248.8 32 234.9 32H96.2c-35.3 0-64 28.7-64 64v288c0 35.3 28.7 64 64 64z"})
);

export default LanFolderOpen;
