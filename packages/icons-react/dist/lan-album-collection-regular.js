import React from 'react';

export const LanAlbumCollectionRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M152.5 0c-13.3 0-24 10.7-24 24s10.7 24 24 24h208c13.3 0 24-10.7 24-24s-10.7-24-24-24zm-48 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h304c13.3 0 24-10.7 24-24s-10.7-24-24-24zm380.3 112.6c-9.2-10.6-22.4-16.6-36.3-16.6h-384c-13.9 0-27.1 6-36.3 16.6S15 233 17 246.8l32 224c3.4 23.6 23.6 41.2 47.5 41.2h320c23.9 0 44.1-17.6 47.5-41.2l32-224c2-13.8-2.1-27.7-11.3-38.2zM64.5 240h384l-32 224h-320zm306.3 112c0-44.2-51.2-80-114.3-80s-114.3 35.8-114.3 80 51.2 80 114.3 80 114.3-35.8 114.3-80m-82.3 0c0 12.4-14.3 22.4-32 22.4s-32-10-32-22.4 14.3-22.4 32-22.4 32 10 32 22.4"})
);

export default LanAlbumCollectionRegular;
