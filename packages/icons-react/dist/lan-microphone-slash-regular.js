import React from 'react';

export const LanMicrophoneSlashRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.95 576 576.1',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L428.2 362.4C450.7 332.8 464 296 464 256v-40c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 26.7-8.2 51.5-22.2 72l-23.2-23.2c8.5-14.3 13.3-31 13.3-48.8V96c0-53-43-96-96-96s-96 43-96 96v30.2l-151-151zm199 199V96c0-26.5 21.5-48 48-48s48 21.5 48 48v160c0 4.3-.6 8.5-1.6 12.5L240 174.2zm110.7 246.4L312 381.8c-7.8 1.5-15.8 2.2-23.9 2.2-70.7 0-128-57.3-128-128v-26.2L125 194.7c-7.7 4-12.9 12-12.9 21.3v40c0 89.1 66.2 162.7 152 174.4V464h-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24h-48v-33.6c13.4-1.8 26.4-5.2 38.7-9.9z"})
);

export default LanMicrophoneSlashRegular;
