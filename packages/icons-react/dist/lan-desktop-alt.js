import React from 'react';

export const LanDesktopAlt = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M448 64H64c-17.7 0-32 14.3-32 32v192h448V96c0-17.7-14.3-32-32-32m32 256H32v32c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32zM64 32h384c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H330.9l10.7 64H400c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16h58.4l10.7-64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64m149.6 384-10.7 64h106.2l-10.7-64h-84.9z"})
);

export default LanDesktopAlt;
