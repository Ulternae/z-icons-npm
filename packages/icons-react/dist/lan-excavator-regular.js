import React from 'react';

export const LanExcavatorRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M640 24c0-9.1-5.1-17.4-13.3-21.5s-17.8-3.2-25.1 2.3L370.5 178.2 299.7 56c-8.6-14.8-24.4-24-41.5-24H176c-26.5 0-48 21.5-48 48v112H80c-26.5 0-48 21.5-48 48v72.4C12.4 330 0 355.6 0 384c0 53 43 96 96 96h224c53 0 96-43 96-96 0-20.5-6.4-39.4-17.3-55L592 184v124.6L432.9 437.3c-7.9 6.4-10.9 17.1-7.5 26.7s12.5 16 22.6 16h112c44.2 0 80-35.8 80-80zM80 289.3V240h256v49.3c-5.2-.9-10.5-1.3-16-1.3H96c-5.5 0-10.8.5-16 1.3M323 192H176V80h82.2zm61 88v-52L592 72v52zm131.8 152 76.2-61.7V400c0 17.7-14.3 32-32 32zM96 336h224c26.5 0 48 21.5 48 48s-21.5 48-48 48H96c-26.5 0-48-21.5-48-48s21.5-48 48-48"})
);

export default LanExcavatorRegular;
