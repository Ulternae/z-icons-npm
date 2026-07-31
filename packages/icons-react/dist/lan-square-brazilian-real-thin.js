import React from 'react';

export const LanSquareBrazilianRealThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm320 40c4.4 0 8 3.6 8 8v24h24c4.4 0 8 3.6 8 8s-3.6 8-8 8h-50.8c-16.1 0-29.2 13.1-29.2 29.2 0 12.6 8 23.7 20 27.7l42 14c20.4 6.8 34.1 25.8 34.1 47.3 0 24.2-17.2 44.3-40 48.9v25c0 4.4-3.6 8-8 8s-8-3.6-8-8v-24h-40c-4.4 0-8-3.6-8-8s3.6-8 8-8h46.2c18.7 0 33.8-15.2 33.8-33.8 0-14.6-9.3-27.5-23.1-32.1l-42-14c-18.5-6.2-30.9-23.4-30.9-42.9 0-25 20.2-45.2 45.2-45.2h10.8v-24c0-4.4 3.6-8 8-8zm-216 24h64c35.3 0 64 28.7 64 64 0 28.8-19.1 53.2-45.3 61.2l28.7 71.8c1.6 4.1-.4 8.8-4.5 10.4s-8.8-.4-10.4-4.5l-30-75c-.9 0-1.7.1-2.6.1h-56v72c0 4.4-3.6 8-8 8s-8-3.6-8-8V168c0-4.4 3.6-8 8-8zm64 112c26.5 0 48-21.5 48-48s-21.5-48-48-48h-56v96z"})
);

export default LanSquareBrazilianRealThin;
