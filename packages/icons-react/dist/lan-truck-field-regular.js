import React from 'react';

export const LanTruckFieldRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M352 80c8.8 0 16 7.2 16 16v240H219.9c-16.1-19.5-40.6-32-67.9-32s-51.7 12.5-67.9 32H80V96c0-8.8 7.2-16 16-16zM32 336c0 21.1 13.7 39.1 32.6 45.5-.4 3.4-.6 7-.6 10.5 0 48.6 39.4 88 88 88s88-39.4 88-88c0-2.7-.1-5.4-.4-8h128.7c-.2 2.6-.4 5.3-.4 8 0 48.6 39.4 88 88 88s88-39.4 88-88c0-2.7-.1-5.4-.4-8h16.4c26.5 0 48-21.5 48-48v-80c0-26.5-21.5-48-48-48h-24.3l-37.1-84.9C487.1 96.9 461.2 80 432.6 80H414c-7.1-27.6-32.2-48-62-48H96c-35.3 0-64 28.7-64 64v32c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32zm424-32c-14.4 0-28 3.5-40 9.6V256h144v80h-36.1c-16.1-19.5-40.6-32-67.9-32m27.3-96H416v-80h16.6c9.5 0 18.2 5.6 22 14.4zM112 392a40 40 0 1 1 80 0 40 40 0 1 1-80 0m344-40a40 40 0 1 1 0 80 40 40 0 1 1 0-80"})
);

export default LanTruckFieldRegular;
