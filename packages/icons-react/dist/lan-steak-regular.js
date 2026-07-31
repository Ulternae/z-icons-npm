import React from 'react';

export const LanSteakRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M143.9 240.1h12.8c34.4 0 66-18.8 82.4-49.1l45.5-84.1c19.8-36.3 57.7-58.9 99-58.9C445.7 48 496 98.3 496 160.4V288c0 79.5-64.5 144-144 144H143.9C91 432 48 389 48 336.1s43-95.9 95.9-95.9zm12.8-48h-12.8C64.4 192.1 0 256.6 0 336.1S64.4 480 143.9 480H352c106 0 192-86 192-192V160.4C544 71.8 472.2 0 383.6 0c-58.9 0-113.1 32.3-141.1 84.1L197 168.2c-8 14.8-23.4 24-40.2 24zm-12.8 96c-26.5 0-47.9 21.5-47.9 47.9s21.5 48 47.9 48H352c53 0 96-43 96-96V160.4c0-35.6-28.8-64.4-64.4-64.4-23.6 0-45.4 13-56.7 33.8l-45.5 84.1c-24.8 45.8-72.6 74.3-124.6 74.3H144zM360 160a24 24 0 1 1 48 0 24 24 0 1 1-48 0"})
);

export default LanSteakRegular;
