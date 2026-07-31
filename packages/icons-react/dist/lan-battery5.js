import React from 'react';

export const LanBattery5 = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M496 96c26.5 0 48 21.5 48 48v224c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48zm80 272v-32h32c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32h-32v-32c0-44.2-35.8-80-80-80H112c-44.2 0-80 35.8-80 80v224c0 44.2 35.8 80 80 80h384c44.2 0 80-35.8 80-80m0-64v-96h32v96zm-416 16V192h288v128zm-32-136v144c0 13.3 10.7 24 24 24h304c13.3 0 24-10.7 24-24V184c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24"})
);

export default LanBattery5;
