import React from 'react';

export const LanUserHatTieMagnifyingGlassRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M72 128h24v16c0 70.7 57.3 128 128 128s128-57.3 128-128v-16h24c13.3 0 24-10.7 24-24s-10.7-24-24-24h-30.7C334.9 26.3 313.4-32 277-32c-9.6 0-19 3.9-27.5 8.2-8.2 4.1-18.4 7.8-25.5 7.8s-17.3-3.7-25.5-7.8C190-28.1 180.6-32 171-32c-36.4 0-57.8 58.3-68.3 112H72c-13.3 0-24 10.7-24 24s10.7 24 24 24m152 0h80v16c0 44.2-35.8 80-80 80s-80-35.8-80-80v-16zm-30.5 176c-9.7 0-17.5 7.8-17.5 17.5 0 4.2 1.5 8.2 4.2 11.4l27.2 31.8-18.5 67.8-55.9-102c-6-11-19.7-15.5-31.1-10.2C41.8 348.3 0 409.2 0 480v8c0 13.3 10.7 24 24 24s24-10.7 24-24v-8c0-43.4 21.6-81.8 54.7-105L171 499.5c4.2 7.7 12.3 12.5 21 12.5h64c5.1 0 10-1.6 14-4.5-28.5-30.1-46-70.8-46-115.5 0-32.3 9.1-62.4 24.9-88h-55.3zM392 320a72 72 0 1 1 0 144 72 72 0 1 1 0-144m0 192c24.4 0 47.1-7.3 66.1-19.8l60.9 60.9c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L492 458.3c12.6-19 19.9-41.8 19.9-66.3 0-66.3-53.7-120-120-120s-120 53.7-120 120 53.7 120 120 120z"})
);

export default LanUserHatTieMagnifyingGlassRegular;
