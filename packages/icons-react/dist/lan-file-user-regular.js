import React from 'react';

export const LanFileUserRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 48h112v88c0 39.8 32.2 72 72 72h88v240c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16m160 19.9 92.1 92.1H248c-13.3 0-24-10.7-24-24zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V186.5c0-17-6.7-33.3-18.7-45.3L242.7 18.7C230.7 6.7 214.5 0 197.5 0zm128 336a48 48 0 1 0 0-96 48 48 0 1 0 0 96m-77.5 52.6c-11.1 11.6.1 27.4 16.1 27.4h122.7c16 0 27.2-15.9 16.1-27.4-12.1-12.7-29.2-20.6-48.2-20.6h-58.7c-18.9 0-36 7.9-48.2 20.6z"})
);

export default LanFileUserRegular;
