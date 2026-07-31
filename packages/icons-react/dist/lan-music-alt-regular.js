import React from 'react';

export const LanMusicAltRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 74.7v70.5l80-20V54.7zm103.8 94.1L256 194.7V400c0 53-50.1 96-112 96S32 453 32 400s50.1-96 112-96c23.8 0 45.9 6.4 64 17.2v-259c0-14.7 10-27.5 24.2-31l112-28c20.2-5 39.8 10.2 39.8 31v103.5c0 14.7-10 27.5-24.2 31zM208 400c0-19.8-21.4-48-64-48s-64 28.2-64 48 21.4 48 64 48 64-28.2 64-48"})
);

export default LanMusicAltRegular;
