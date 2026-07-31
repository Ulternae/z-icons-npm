import React from 'react';

export const LanListMusic = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M536.2 5.4c20.2-5 39.8 10.2 39.8 31v95c0 14.7-10 27.5-24.2 31L448 188.5V400c0 53-50.1 96-112 96s-112-43-112-96 50.1-96 112-96c31.3 0 59.7 11 80 28.8V60.5c0-14.7 10-27.5 24.2-31l96-24zM336 336c-49 0-80 33.1-80 64s31 64 80 64 80-33.1 80-64-31-64-80-64m112-180.5 96-24v-95l-96 24zM48 80h288c8.8 0 16 7.2 16 16s-7.2 16-16 16H48c-8.8 0-16-7.2-16-16s7.2-16 16-16m0 160h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H48c-8.8 0-16-7.2-16-16s7.2-16 16-16m0 160h112c8.8 0 16 7.2 16 16s-7.2 16-16 16H48c-8.8 0-16-7.2-16-16s7.2-16 16-16"})
);

export default LanListMusic;
