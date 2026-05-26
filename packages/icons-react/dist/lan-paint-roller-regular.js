import React from 'react';

export const LanPaintRollerRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M352 48c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16zM64 0C28.7 0 0 28.7 0 64v64c0 35.3 28.7 64 64 64h288c35.3 0 64-28.7 64-64v-8h16c13.3 0 24 10.7 24 24v96c0 13.3-10.7 24-24 24H272c-39.8 0-72 32.2-72 72v.7c-22.7 3.8-40 23.6-40 47.3v112c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V384c0-23.8-17.3-43.5-40-47.3v-.7c0-13.3 10.7-24 24-24h160c39.8 0 72-32.2 72-72v-96c0-39.8-32.2-72-72-72h-16v-8c0-35.3-28.7-64-64-64zm176 384v112h-32V384z"})
);

export default LanPaintRollerRegular;
