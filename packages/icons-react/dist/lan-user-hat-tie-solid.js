import React from 'react';

export const LanUserHatTieSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M72 128h24v16c0 70.7 57.3 128 128 128s128-57.3 128-128v-16h24c13.3 0 24-10.7 24-24s-10.7-24-24-24h-30.7C334.9 26.3 313.4-32 277-32c-9.6 0-19 3.9-27.5 8.2-8.2 4.1-18.4 7.8-25.5 7.8s-17.3-3.7-25.5-7.8C190-28.1 180.6-32 171-32c-36.4 0-57.8 58.3-68.3 112H72c-13.3 0-24 10.7-24 24s10.7 24 24 24m152 0h80v16c0 44.2-35.8 80-80 80s-80-35.8-80-80v-16zm-30.5 176c-9.7 0-17.5 7.8-17.5 17.5 0 4.2 1.5 8.2 4.2 11.4l27.4 32-31 115.1h-.6l-34.6-138.5c-2.2-8.7-11.1-14-19.5-10.8C60 354.3 16 414.3 16 484.5c0 15.1 12.3 27.4 27.4 27.4h361.1c15.1 0 27.4-12.3 27.4-27.4 0-70.2-44-130.2-105.9-153.8-8.4-3.2-17.3 2.1-19.5 10.8L271.9 480h-.6l-31-115.1 27.4-32c2.7-3.2 4.2-7.2 4.2-11.4 0-9.7-7.8-17.5-17.5-17.5h-61z"})
);

export default LanUserHatTieSolid;
