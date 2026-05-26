import React from 'react';

export const LanMicrophoneAltSlashRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M7-24.9c9.4-9.4 24.6-9.4 33.9 0l151 151V95.9c0-53 43-96 96-96s96 43 96 96v160c0 17.8-4.9 34.5-13.3 48.8l23.2 23.3c14-20.5 22.2-45.3 22.2-72v-40c0-13.3 10.7-24 24-24s24 10.7 24 24v40c0 40-13.3 76.8-35.8 106.4L569 503.1c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L7 9.1c-9.3-9.4-9.3-24.6 0-34m327.4 293.4c1.1-4 1.6-8.2 1.6-12.5v-96h-24c-13.3 0-24-10.7-24-24s10.7-24 24-24h24V96c0-26.5-21.5-48-48-48s-48 21.5-48 48v78.2l94.4 94.4zm-22.5 113.3 38.7 38.7q-18.45 7.05-38.7 9.9V464h48c13.3 0 24 10.7 24 24s-10.7 24-24 24h-144c-13.3 0-24-10.7-24-24s10.7-24 24-24h48v-33.6C178.2 418.7 112 345.1 112 256v-40c0-9.2 5.2-17.3 12.9-21.3l35.1 35.1V256c0 70.7 57.3 128 128 128 8.2 0 16.2-.8 23.9-2.2"})
);

export default LanMicrophoneAltSlashRegular;
