import React from 'react';

export const LanVideoPlusRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M352 112c8.8 0 16 7.2 16 16v256c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V128c0-8.8 7.2-16 16-16zM96 64c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm368 108v60l64-48v144l-64-48v60l73.6 55.2c4.2 3.1 9.2 4.8 14.4 4.8 13.3 0 24-10.7 24-24V136c0-13.3-10.7-24-24-24-5.2 0-10.2 1.7-14.4 4.8zm-240-12c-13.3 0-24 10.7-24 24v48h-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h48v48c0 13.3 10.7 24 24 24s24-10.7 24-24v-48h48c13.3 0 24-10.7 24-24s-10.7-24-24-24h-48v-48c0-13.3-10.7-24-24-24"})
);

export default LanVideoPlusRegular;
