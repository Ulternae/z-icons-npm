import React from 'react';

export const LanMusicAltThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M384 28.5c0-15.6-14.7-27.1-29.8-23.3l-96 24C247.5 31.9 240 41.5 240 52.5v298c-19.6-27.9-55.3-46.5-96-46.5-61.9 0-112 43-112 96s50.1 96 112 96 112-43 112-96V182.2l109.8-27.5c10.7-2.7 18.2-12.3 18.2-23.3v-103zM240 400c0 42-40.6 80-96 80s-96-38-96-80 40.6-80 96-80 96 38 96 80m121.9-260.7L256 165.8V52.5c0-3.7 2.5-6.9 6.1-7.8l96-24c5-1.3 9.9 2.6 9.9 7.8v103c0 3.7-2.5 6.9-6.1 7.8"})
);

export default LanMusicAltThin;
