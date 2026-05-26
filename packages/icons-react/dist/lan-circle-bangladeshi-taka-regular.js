import React from 'react';

export const LanCircleBangladeshiTakaRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512M136.5 147.3c-2.6 13 5.8 25.6 18.8 28.2l10.6 2.1c5.9 1.2 10.1 6.3 10.1 12.3v18h-13.7c-8.8 0-16 7.2-16 16s7.2 16 16 16H176v83.4c0 33.5 27.1 60.6 60.6 60.6h24c63.7.1 115.4-51.6 115.4-115.3v-16c0-33.5-27.1-60.6-60.6-60.6H312c-13.3 0-24 10.7-24 24s10.7 24 24 24h3.4c6.9 0 12.6 5.6 12.6 12.6v16c0 37.2-30.2 67.4-67.4 67.4h-24c-6.9 0-12.6-5.6-12.6-12.6V240h16c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v-18c0-28.9-20.4-53.7-48.7-59.4l-10.6-2.1c-13-2.6-25.6 5.8-28.2 18.8"})
);

export default LanCircleBangladeshiTakaRegular;
