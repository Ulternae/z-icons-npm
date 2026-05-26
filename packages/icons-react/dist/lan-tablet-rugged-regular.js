import React from 'react';

export const LanTabletRuggedRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M352 48c8.8 0 16 7.2 16 16v384c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16zM96 0C66.6 0 41.8 19.8 34.3 46.8L8.8 59.6C3.4 62.3 0 67.8 0 73.9v76.2c0 6.1 3.4 11.6 8.8 14.3L32 176v16L8.8 203.6c-5.4 2.7-8.8 8.2-8.8 14.3v76.2c0 6.1 3.4 11.6 8.8 14.3L32 320v16L8.8 347.6c-5.4 2.7-8.8 8.2-8.8 14.3v76.2c0 6.1 3.4 11.6 8.8 14.3l25.5 12.7C41.8 492.2 66.6 512 96 512h256c29.4 0 54.2-19.8 61.7-46.8l25.5-12.7c5.4-2.7 8.8-8.2 8.8-14.3V362c0-6.1-3.4-11.6-8.8-14.3L416 336.1v-16l23.2-11.6c5.4-2.7 8.8-8.2 8.8-14.3V218c0-6.1-3.4-11.6-8.8-14.3L416 192.1v-16l23.2-11.6c5.4-2.7 8.8-8.3 8.8-14.3V74c0-6.1-3.4-11.6-8.8-14.3l-25.5-12.9C406.2 19.8 381.4 0 352 0z"})
);

export default LanTabletRuggedRegular;
