import React from 'react';

export const LanBookOpenReaderThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 512 549.275',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M176 64a80 80 0 1 1 160 0 80 80 0 1 1-160 0m176 0a96 96 0 1 0-192 0 96 96 0 1 0 192 0M224.7 236.3 248 246v253.3l-11-4.6C188.3 474.5 136 464 83.2 464H48c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h35.2c48.6 0 96.7 9.6 141.5 28.3M275 494.8l-11 4.6V246.1l23.3-9.7c44.8-18.7 93-28.3 141.5-28.3H464c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32h-35.2C376 464 323.7 474.5 275 494.8M256 232l-25.1-10.5C184.1 202 133.9 192 83.2 192H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h35.2c50.7 0 100.9 10 147.7 29.5l12.8 5.3c7.9 3.3 16.7 3.3 24.6 0l12.8-5.3c46.8-19.5 97-29.5 147.7-29.5H464c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48h-35.2c-50.7 0-100.9 10-147.7 29.5z"})
);

export default LanBookOpenReaderThin;
