import React from 'react';

export const LanJugBottleRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M120 0c-13.3 0-24 10.7-24 24v24h-8c-13.3 0-24 10.7-24 24s10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8V24c0-13.3-10.7-24-24-24zm8 176h93.5c10.8-19.5 27.6-35.6 48.6-45.5l1.9-.9v-.6c-5.2-.7-10.6-1-16-1H128C57.3 128 0 185.3 0 256v192c0 35.3 28.7 64 64 64h164.1c-9.8-14-16.4-30.3-18.9-48H64c-8.8 0-16-7.2-16-16V256c0-44.2 35.8-80 80-80m192-88v40h128V88c0-13.3-10.7-24-24-24h-80c-13.3 0-24 10.7-24 24m-29.6 86c-21 9.9-34.4 31-34.4 54.2 0 22.8 12.7 42.6 31.5 52.7C268.7 292 256 312.6 256 336c0 24.1 13.3 45.1 33 56-19.7 10.9-33 31.9-33 56 0 35.3 28.7 64 64 64h128c35.3 0 64-28.7 64-64 0-24.1-13.3-45.1-33-56 19.7-10.9 33-31.9 33-56 0-23.5-12.6-44-31.5-55.1 18.7-10.1 31.5-29.9 31.5-52.7 0-23.2-13.4-44.3-34.4-54.2l-13.2-6.2c-11-5.1-23-7.8-35.1-7.8h-90.6c-12.1 0-24.1 2.7-35.1 7.8z"})
);

export default LanJugBottleRegular;
