import React from 'react';

export const LanRectangleIrc = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M448 64c35.3 0 64 28.7 64 64v256l-.3 6.5c-3.3 32.3-30.6 57.5-63.7 57.5H64C30.9 448 3.6 422.8.3 390.5L0 384V128c0-35.3 28.7-64 64-64zM64 96c-16.6 0-30.2 12.6-31.8 28.7L32 128v256c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32zm32 64c8.8 0 16 7.2 16 16v160c0 8.8-7.2 16-16 16s-16-7.2-16-16V176c0-8.8 7.2-16 16-16m128 0c35.3 0 64 28.7 64 64 0 20.3-9.5 38.4-24.3 50.1 14.9 13.2 24.3 32.4 24.3 53.9v8c0 8.8-7.2 16-16 16s-16-7.2-16-16v-8c0-22.1-17.9-40-40-40h-24v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V176c0-8.8 7.2-16 16-16zm168 0c30.9 0 56 25.1 56 56 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v80c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24 0-8.8 7.2-16 16-16s16 7.2 16 16c0 30.9-25.1 56-56 56h-16c-30.9 0-56-25.1-56-56v-80c0-30.9 25.1-56 56-56zm-200 96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32z"})
);

export default LanRectangleIrc;
