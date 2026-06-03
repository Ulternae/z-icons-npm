import React from 'react';

export const LanUserLockRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M304 128a80 80 0 1 0-160 0 80 80 0 1 0 160 0m-208 0a128 128 0 1 1 256 0 128 128 0 1 1-256 0M48 480v8c0 13.3-10.7 24-24 24S0 501.3 0 488v-8c0-97.2 78.8-176 176-176h96c22.6 0 44.2 4.3 64 12v12.4c-9.5 8.5-17.3 18.8-22.8 30.4-12.9-4.4-26.8-6.8-41.2-6.8h-96c-70.7 0-128 57.3-128 128m448-175.9c0-17.7-14.3-32-32-32s-32 14.3-32 32V352h64zM352 400c0-20.9 13.4-38.7 32-45.3v-50.6c0-44.2 35.8-80 80-80s80 35.8 80 80v50.6c18.6 6.6 32 24.4 32 45.3v96c0 26.5-21.5 48-48 48H400c-26.5 0-48-21.5-48-48z"})
);

export default LanUserLockRegular;
