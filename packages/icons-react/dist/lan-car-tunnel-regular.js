import React from 'react';

export const LanCarTunnelRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M48 256c0-114.9 93.1-208 208-208s208 93.1 208 208v232c0 13.3 10.7 24 24 24s24-10.7 24-24V256C512 114.6 397.4 0 256 0S0 114.6 0 256v232c0 13.3 10.7 24 24 24s24-10.7 24-24zm139.3 20.2c1.4-2.6 4.1-4.3 7.1-4.3h123.3c3 0 5.7 1.6 7.1 4.3l23.2 43.7H164.2l23.2-43.7zM144 416v-48h224v48zm0 48h224v22c0 13.3 10.7 24 24 24s24-10.7 24-24V367.9c0-14.4-3.5-28.5-10.2-41.2l-38.6-72.9c-9.7-18.3-28.7-29.8-49.5-29.8H194.4c-20.7 0-39.8 11.5-49.5 29.8l-38.6 72.9C99.5 339.4 96 353.5 96 367.9V486c0 13.3 10.7 24 24 24s24-10.7 24-24z"})
);

export default LanCarTunnelRegular;
