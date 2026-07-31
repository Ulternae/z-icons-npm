import React from 'react';

export const LanArrowRightFromFileRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M208.5 48h-112c-8.8 0-16 7.2-16 16v384c0 8.8 7.2 16 16 16h256c8.8 0 16-7.2 16-16v-48h48v48c0 35.3-28.7 64-64 64h-256c-35.3 0-64-28.7-64-64V64c0-35.3 28.7-64 64-64H230c17 0 33.3 6.7 45.3 18.7l122.5 122.6c12 12 18.7 28.3 18.7 45.3v69.5h-48v-48h-88c-39.8 0-72-32.2-72-72v-88zm72 256h214.1l-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l72 72c9.4 9.4 9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31H280.5c-13.3 0-24-10.7-24-24s10.7-24 24-24zm68.1-144-92.1-92.1V136c0 13.3 10.7 24 24 24z"})
);

export default LanArrowRightFromFileRegular;
