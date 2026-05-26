import React from 'react';

export const LanSeatRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 48c8.8 0 16 7.2 16 16v192H112V64c0-8.8 7.2-16 16-16zM64 64v192H48c-26.5 0-48 21.5-48 48v48c0 20.9 13.4 38.7 32 45.3V488c0 13.3 10.7 24 24 24s24-10.7 24-24v-88h224v88c0 13.3 10.7 24 24 24s24-10.7 24-24v-90.7c18.6-6.6 32-24.4 32-45.3v-48c0-26.5-21.5-48-48-48h-16V64c0-35.3-28.7-64-64-64H128C92.7 0 64 28.7 64 64m264 288H48v-48h288v48z"})
);

export default LanSeatRegular;
