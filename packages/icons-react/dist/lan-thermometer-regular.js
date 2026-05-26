import React from 'react';

export const LanThermometerRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M218.7 368H144v-74.7c0-2.1.8-4.2 2.3-5.7l21.7-21.7 23 23c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-23-23 46.1-46.1 23 23c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-23-23 46.1-46.1 23 23c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-23-23 7.8-7.8C380 53.8 394.1 48 408.7 48c30.5 0 55.2 24.7 55.2 55.2 0 14.6-5.8 28.7-16.2 39L224.4 365.7c-1.5 1.5-3.5 2.3-5.7 2.3M41 505l89-89h88.8c14.9 0 29.1-5.9 39.6-16.4l223.4-223.4c19.4-19.4 30.2-45.6 30.2-73C512 46.2 465.8 0 408.8 0c-27.4 0-53.6 10.9-73 30.2L112.4 253.7A55.92 55.92 0 0 0 96 293.3v88.8l-89 89c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0z"})
);

export default LanThermometerRegular;
