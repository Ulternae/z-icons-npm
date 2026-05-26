import React from 'react';

export const LanSquareParkingSlashRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-62.1-62.1c3.3-7.7 5.1-16.2 5.1-25.1V96c0-35.3-28.7-64-64-64H128c-8.9 0-17.4 1.8-25.1 5.1l-62-62zM145.8 80H448c8.8 0 16 7.2 16 16v302.2l-99.6-99.6C386.1 281 400 254.1 400 224c0-53-43-96-96-96h-80c-8.4 0-16 3.2-21.7 8.5zm184.3 184.3L241.8 176H304c26.5 0 48 21.5 48 48 0 16.9-8.7 31.7-21.9 40.3M362.2 432H128c-8.8 0-16-7.2-16-16V181.8l-48-48V416c0 35.3 28.7 64 64 64h282.2zM192 296v64c0 13.3 10.7 24 24 24s24-10.7 24-24v-40h10.2L192 261.8z"})
);

export default LanSquareParkingSlashRegular;
