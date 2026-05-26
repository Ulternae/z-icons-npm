import React from 'react';

export const LanDesktopArrowDownRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M280 24v118.1l15-15c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-56 56c-9.4 9.4-24.6 9.4-33.9 0l-56-56c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l15 15V24c0-13.3 10.7-24 24-24s24 10.7 24 24zM64 32h112v48H64c-8.8 0-16 7.2-16 16v176h416V96c0-8.8-7.2-16-16-16H336V32h112c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H332.3l8 48H392c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24h51.7l8-48H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64m400 320v-32H48v32c0 8.8 7.2 16 16 16h384c8.8 0 16-7.2 16-16M220.3 464h71.3l-8-48h-55.3z"})
);

export default LanDesktopArrowDownRegular;
