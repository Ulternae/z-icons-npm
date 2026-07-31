import React from 'react';

export const LanAddressBookThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M96 16c-26.5 0-48 21.5-48 48v384c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V64c0-26.5-21.5-48-48-48zM32 64C32 28.7 60.7 0 96 0h288c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64zm256 128a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-112 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0m24 112c-30.9 0-56 25.1-56 56 0 4.4-3.6 8-8 8s-8-3.6-8-8c0-39.8 32.2-72 72-72h80c39.8 0 72 32.2 72 72 0 4.4-3.6 8-8 8s-8-3.6-8-8c0-30.9-25.1-56-56-56zM504 80v64c0 4.4-3.6 8-8 8s-8-3.6-8-8V80c0-4.4 3.6-8 8-8s8 3.6 8 8m-8 120c4.4 0 8 3.6 8 8v64c0 4.4-3.6 8-8 8s-8-3.6-8-8v-64c0-4.4 3.6-8 8-8m8 136v64c0 4.4-3.6 8-8 8s-8-3.6-8-8v-64c0-4.4 3.6-8 8-8s8 3.6 8 8"})
);

export default LanAddressBookThin;
