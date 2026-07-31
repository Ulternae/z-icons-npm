import React from 'react';

export const LanFolderArrowLeft = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M202.7 32c13.8 0 27.3 4.5 38.4 12.8l38.4 28.8c4.2 3.1 9 5.2 14.1 6l5.1.4H448c35.3 0 64 28.7 64 64v240c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64zM64 64c-17.7 0-32 14.3-32 32v288c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32H298.7c-12.1 0-23.9-3.4-34.1-9.9l-4.2-2.9L222 70.4c-5.5-4.2-12.3-6.4-19.2-6.4zm175.2 114.6c6.2-4.1 14.7-3.4 20.1 2.1s6.2 13.9 2.1 20.1l-2.1 2.5-44.7 44.7H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H214.6l44.7 44.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-72-72-2.1-2.5c-4.1-6.2-3.4-14.7 2.1-20.1l72-72z"})
);

export default LanFolderArrowLeft;
