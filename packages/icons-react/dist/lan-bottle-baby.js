import React from 'react';

export const LanBottleBaby = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 320 576',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M160-32c26.5 0 48 21.5 48 48 18.5 9.2 30.5 27.6 31.9 48 .1.9.1 1.8.1 2.7 18.6 6.6 32 24.4 32 45.3v74.7l11.5 19.1c13.4 22.4 20.5 48 20.5 74.1V480c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V279.9c0-26.1 7.1-51.7 20.5-74.1L48 186.7V112c0-20.9 13.4-38.7 32-45.3 0-.9.1-1.8.1-2.7 1.3-20.4 13.4-38.8 31.9-48 0-26.5 21.5-48 48-48m47.7 96c-1.2-8.3-6.4-15.6-14-19.4C182.9 39.2 176 28.1 176 16c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 12.1-6.8 23.2-17.7 28.6-7.6 3.8-12.8 11.1-14 19.4zM96 96c-8.8 0-16 7.2-16 16v48h160v-48c0-8.8-7.2-16-16-16zM64 222.3c-10.4 17.4-16 37.3-16 57.6v8.1h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H48v64h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H48v64c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32V279.9c0-20.3-5.5-40.2-16-57.6L237.9 192H82.1z"})
);

export default LanBottleBaby;
