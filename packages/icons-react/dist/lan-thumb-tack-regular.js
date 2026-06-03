import React from 'react';

export const LanThumbTackRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M56 0C42.7 0 32 10.7 32 24s10.7 24 24 24h30.2L76 186.2c-17.3 12.4-34.2 29.1-47.5 48C12.5 256.7 0 284.5 0 313.7 0 334.8 17.2 352 38.3 352h307.3c21.2 0 38.3-17.2 38.3-38.3 0-29.2-12.5-57-28.5-79.5-13.4-18.9-30.2-35.5-47.5-48L297.8 48H328c13.3 0 24-10.7 24-24S341.3 0 328 0zm193.7 48 10.5 141.8 1.7 22.3 18.2 13.1c16.1 11.6 29.3 26.3 40.4 42.8 6.9 10.8 13 23.3 14.7 36.1L48.8 304c2.5-15.3 9.9-29.5 18.8-42.1 10-14.1 22.9-27.1 36.4-36.8l18.2-13.1 1.7-22.3 10.5-141.8h115.4zM168 520c0 13.3 10.7 24 24 24s24-10.7 24-24V400h-48z"})
);

export default LanThumbTackRegular;
