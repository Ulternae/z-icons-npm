import React from 'react';

export const LanCalendarLinesPenRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M208.1 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v40h-32c-35.3 0-64 28.7-64 64v288c0 35.3 28.7 64 64 64h152.6l4.5-22.5c1.8-8.8 4.6-17.4 8.4-25.5H128.1c-8.8 0-16-7.2-16-16V128c0-8.8 7.2-16 16-16h320c8.8 0 16 7.2 16 16v124l22.1-22.1c7.8-7.8 16.6-14.2 25.9-19V128c0-35.3-28.7-64-64-64h-32V24c0-13.3-10.7-24-24-24s-24 10.7-24 24v40h-160zm-48 224c0 13.3 10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24h-144c-13.3 0-24 10.7-24 24m24 72c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24zm148.2 146.9-11.9 59.6c-.2.9-.3 1.9-.3 2.9 0 8 6.5 14.6 14.6 14.6 1 0 1.9-.1 2.9-.3l59.6-11.9c12.4-2.5 23.8-8.6 32.7-17.5l118.9-118.9-80-80-118.9 118.9c-8.9 8.9-15 20.3-17.5 32.7zm267.8-123c22.1-22.1 22.1-57.9 0-80s-57.9-22.1-80 0l-28.8 28.8 80 80z"})
);

export default LanCalendarLinesPenRegular;
