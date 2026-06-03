import React from 'react';

export const LanImageStackRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 512 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96-8c0 13.3 10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24H120c-13.3 0-24 10.7-24 24M48 88c0 13.3 10.7 24 24 24h368c13.3 0 24-10.7 24-24s-10.7-24-24-24H72c-13.3 0-24 10.7-24 24m400 120c8.8 0 16 7.2 16 16v192c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224c0-8.8 7.2-16 16-16zM64 160c-35.3 0-64 28.7-64 64v192c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64zm48 144a32 32 0 1 0 0-64 32 32 0 1 0 0 64m208-48c-7.6 0-14.7 3.6-19.2 9.6L260 320l-16.8-22.4c-4.5-6-11.6-9.6-19.2-9.6s-14.7 3.6-19.2 9.6l-48 64c-5.5 7.3-6.3 17-2.3 25.1S166.9 400 176 400h216c9.1 0 17.4-5.1 21.5-13.3s3.2-17.9-2.3-25.1l-72-96c-4.5-6-11.6-9.6-19.2-9.6"})
);

export default LanImageStackRegular;
