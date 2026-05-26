import React from 'react';

export const LanArrowRightToFileRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M128 48h112v88c0 39.8 32.2 72 72 72h88v240c0 8.8-7.2 16-16 16H128c-8.8 0-16-7.2-16-16v-48H64v48c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V186.5c0-17-6.7-33.3-18.7-45.3L306.7 18.7C294.7 6.7 278.5 0 261.5 0H128C92.7 0 64 28.7 64 64v192h48V64c0-8.8 7.2-16 16-16m160 19.9 92.1 92.1H312c-13.3 0-24-10.7-24-24zM0 328c0 13.3 10.7 24 24 24h222.1l-31 31c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l72-72c9.4-9.4 9.4-24.6 0-33.9l-72-72c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l31 31H24c-13.3 0-24 10.7-24 24z"})
);

export default LanArrowRightToFileRegular;
