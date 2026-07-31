import React from 'react';

export const LanCalendarImage = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M112 0c8.8 0 16 7.2 16 16v48h192V16c0-8.8 7.2-16 16-16s16 7.2 16 16v48h32c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64h32V16c0-8.8 7.2-16 16-16m272 96H64c-17.7 0-32 14.3-32 32v288c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32m-280 96a24 24 0 1 1 48 0 24 24 0 1 1-48 0m95 42.5c6.6-6.7 15.6-10.5 25-10.5s18.4 3.8 25 10.5l93.8 95.3c5.9 6 9.2 14 9.2 22.4 0 17.6-14.3 31.9-31.9 31.9H127.9c-17.6 0-31.9-14.3-31.9-31.9 0-8.4 3.3-16.4 9.2-22.4zm25 21.5c-.8 0-1.6.3-2.2.9L128.2 352h191.7l-93.6-95.1c-.6-.6-1.4-.9-2.2-.9z"})
);

export default LanCalendarImage;
