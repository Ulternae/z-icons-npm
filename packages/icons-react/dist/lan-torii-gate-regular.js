import React from 'react';

export const LanToriiGateRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M36.3 19.4c-7.4-4.4-16.6-4.6-24.2-.3S0 31.4 0 40v64c0 40.3 27.1 74.2 64 84.7V256H40c-13.3 0-24 10.7-24 24s10.7 24 24 24h24v184c0 13.3 10.7 24 24 24s24-10.7 24-24V304h224v184c0 13.3 10.7 24 24 24s24-10.7 24-24V304h24c13.3 0 24-10.7 24-24s-10.7-24-24-24h-24v-67.3c36.9-10.4 64-44.4 64-84.7V40c0-8.6-4.6-16.6-12.2-20.9s-16.8-4.1-24.2.3l-64.7 38.9c-6.3 3.7-13.4 5.7-20.6 5.7H121.7c-7.2 0-14.4-2-20.6-5.7zM336 192v64h-88v-64zm-136 0v64h-88v-64zM48 104V82.4l28.5 17.1c13.7 8.2 29.3 12.5 45.3 12.5h204.5c16 0 31.6-4.3 45.3-12.5L400 82.4V104c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40"})
);

export default LanToriiGateRegular;
