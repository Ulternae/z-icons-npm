import React from 'react';

export const LanCoinBlankThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 352c22.1 0 43.5-1.6 64-4.5v80.4c-20.3 2.7-41.8 4.2-64 4.2s-43.7-1.5-64-4.2v-80.4c20.5 3 41.9 4.5 64 4.5M80 312.6c27.1 14.4 59.8 25.6 96 32.3v80.6c-36.1-6.2-68.1-16.3-93.9-29.2-.7-.4-1.4-.7-2.1-1.1v-82.5zm-64-54.4c11 16.7 27.4 31.9 48 45V386c-32.3-20.2-48-43.8-48-66zM256 64C114.6 64 0 128.5 0 208v112c0 70.7 114.6 128 256 128s256-57.3 256-128V208c0-79.5-114.6-144-256-144m192 239.3c20.6-13.1 37-28.3 48-45v61.8c0 22.2-15.7 45.8-48 66.1v-82.8zm-112 41.5c36.2-6.7 68.9-17.8 96-32.3V395c-.7.4-1.4.7-2.1 1.1-25.8 12.9-57.8 23.1-93.9 29.2v-80.6zM16 208c0-70.7 107.5-128 240-128s240 57.3 240 128-107.5 128-240 128S16 278.7 16 208"})
);

export default LanCoinBlankThin;
