import React from 'react';

export const LanBellSchoolSlashSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-49.8-49.8c10.4-17.5 16.5-37.9 16.8-59.7 14.4-8.3 24-23.8 24-41.6 0-26.5-21.5-48-48-48s-48 21.5-48 48c0 17.8 9.6 33.3 24 41.6-.2 8.4-1.8 16.5-4.6 23.9L420 354.2c37.1-37.6 60-89.2 60-146.2C480 93.1 386.9 0 272 0c-57 0-108.6 22.9-146.2 60zm175.4 175.4c14.4-13.9 34-22.5 55.6-22.5 44.2 0 80 35.8 80 80 0 21.6-8.6 41.2-22.5 55.6l-34-34c5.3-5.7 8.5-13.3 8.5-21.7 0-17.7-14.3-32-32-32-8.4 0-16 3.2-21.7 8.5l-34-34zm149 295.9c-28.9 11.3-60.4 17.5-93.3 17.5-53.4 0-103-16.3-144-44.3v28.3c0 35.3 28.7 64 64 64h224c4.8 0 9.4-.3 14-.8zm-37.9-37.9-256-255.9C66.6 170.2 64 188.8 64 208c0 114.9 93.1 208 208 208 19.2 0 37.8-2.6 55.4-7.5z"})
);

export default LanBellSchoolSlashSolid;
