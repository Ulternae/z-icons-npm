import React from 'react';

export const LanShopLockRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M121.2 88.8 64.4 202.5c-.3.5-.4 1.1-.4 1.7 0 2.1 1.7 3.8 3.8 3.8h349.3c-8.4 14.5-14 30.7-16.1 48h-49v176c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48V255.9c-26.8-1.9-48-24.3-48-51.6 0-8 1.9-16 5.5-23.2L78.3 67.4c10.9-21.7 33-35.4 57.3-35.4h304.9c24.2 0 46.4 13.7 57.2 35.4l38.4 76.9q-4.05-.3-8.1-.3c-14.8 0-28.9 2.5-42.1 7.1l-31.1-62.3c-2.7-5.4-8.2-8.8-14.3-8.8H135.6c-6.1 0-11.6 3.4-14.3 8.8zM112 336h192v-80H112zm0 48v48h192v-48zm448-111.9c0-17.7-14.3-32-32-32s-32 14.3-32 32V320h64zM416 368c0-20.9 13.4-38.7 32-45.3v-50.6c0-44.2 35.8-80 80-80s80 35.8 80 80v50.6c18.6 6.6 32 24.4 32 45.3v96c0 26.5-21.5 48-48 48H464c-26.5 0-48-21.5-48-48z"})
);

export default LanShopLockRegular;
