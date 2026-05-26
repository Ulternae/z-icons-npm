import React from 'react';

export const LanCoinRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M152 339.6c24.8 6.2 51.8 10.3 80 11.8v48c-29.1-1.5-56.1-5.6-80-11.7v-48zM48 292c15.6 12.2 34.5 23 56 31.9v47.3c-2.6-1.2-5.1-2.4-7.6-3.6C55.2 347 48 327.4 48 320zM256 64C114.6 64 0 128.5 0 208v112c0 70.7 114.6 128 256 128s256-57.3 256-128V208c0-79.5-114.6-144-256-144m144 263.1c24.8-9.5 46.5-21.4 64-35.1v28c0 7.4-7.2 27-48.4 47.6-4.9 2.4-10.1 4.8-15.6 7zm-120 24.3c25.2-1.3 49.4-4.7 72-9.8v48.1c-21.9 5-46.1 8.5-72 9.8v-48zM64 208c0-53 86-96 192-96s192 43 192 96-86 96-192 96-192-43-192-96m192 64c79.5 0 144-28.7 144-64s-64.5-64-144-64-144 28.7-144 64 64.5 64 144 64m-80-64c0-5 11.4-9.4 29.2-12.4 13.8-2.3 31.5-3.6 50.8-3.6s37 1.4 50.8 3.6c17.8 3 29.2 7.4 29.2 12.4s-11.4 9.4-29.2 12.4c-13.8 2.2-31.5 3.6-50.8 3.6s-37-1.4-50.8-3.6c-17.8-3-29.2-7.4-29.2-12.4"})
);

export default LanCoinRegular;
