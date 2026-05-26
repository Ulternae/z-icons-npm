import React from 'react';

export const LanCheeseSwiss = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M480 244v12h-66.7c-6.6-18.6-24.4-32-45.3-32s-38.7 13.4-45.3 32H32c0-9.3 4.6-18 12.4-23.1l148.7-99.2c-.7 3.3-1.1 6.7-1.1 10.3 0 26.5 21.5 48 48 48s48-21.5 48-48c0-23.6-17-43.2-39.4-47.2l47.2-31.5c1.3-.8 2.8-1.3 4.3-1.3 99.4 0 180 80.6 180 180zm-157.3 44c6.6 18.6 24.4 32 45.3 32s38.7-13.4 45.3-32H480v128c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V288zM512 256v-12c0-117.1-94.9-212-212-212-7.8 0-15.5 2.3-22 6.7L26.6 206.2C10 217.3 0 236 0 256v160c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64zM160 368a16 16 0 1 1 32 0 16 16 0 1 1-32 0m64 0a48 48 0 1 0-96 0 48 48 0 1 0 96 0m16-240a16 16 0 1 1 0 32 16 16 0 1 1 0-32m112 144a16 16 0 1 1 32 0 16 16 0 1 1-32 0"})
);

export default LanCheeseSwiss;
