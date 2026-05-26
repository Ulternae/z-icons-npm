import React from 'react';

export const LanTabletRuggedSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M32 176 8.8 164.4c-5.4-2.7-8.8-8.2-8.8-14.3V73.9c0-6.1 3.4-11.6 8.8-14.3l25.5-12.8C41.8 19.8 66.6 0 96 0h256c29.4 0 54.2 19.8 61.7 46.8l25.5 12.7c5.4 2.7 8.8 8.3 8.8 14.3V150c0 6.1-3.4 11.6-8.8 14.3L416 175.9v16l23.2 11.6c5.4 2.7 8.8 8.3 8.8 14.3V294c0 6.1-3.4 11.6-8.8 14.3L416 319.9v16l23.2 11.6c5.4 2.7 8.8 8.2 8.8 14.3V438c0 6.1-3.4 11.6-8.8 14.3L413.7 465c-7.5 27-32.3 46.8-61.7 46.8L96 512c-29.4 0-54.2-19.8-61.7-46.8L8.8 452.4c-5.4-2.7-8.8-8.2-8.8-14.3v-76.2c0-6.1 3.4-11.6 8.8-14.3L32 336v-16L8.8 308.4c-5.4-2.7-8.8-8.2-8.8-14.3v-76.2c0-6.1 3.4-11.6 8.8-14.3L32 192zm80-112c-8.8 0-16 7.2-16 16v352c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16z"})
);

export default LanTabletRuggedSolid;
