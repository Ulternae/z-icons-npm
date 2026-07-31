import React from 'react';

export const LanCalendarExclamation = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M336 0c8.8 0 16 7.2 16 16v48h32c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64h32V16c0-8.8 7.2-16 16-16s16 7.2 16 16v48h192V16c0-8.8 7.2-16 16-16M64 96c-17.7 0-32 14.3-32 32v288c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32zm160 304a24 24 0 1 1 0-48 24 24 0 1 1 0 48m0-256c13.5 0 24.3 11.4 23.5 24.9l-7.6 136c-.5 8.5-7.5 15.1-16 15.1s-15.5-6.6-16-15.1l-7.6-136c-.8-13.5 10-24.9 23.5-24.9z"})
);

export default LanCalendarExclamation;
