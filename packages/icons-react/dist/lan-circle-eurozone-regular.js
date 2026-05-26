import React from 'react';

export const LanCircleEurozoneRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512M136 144c-13.3 0-24 10.7-24 24v176c0 13.3 10.7 24 24 24h73.6c13.3 0 24-10.7 24-24s-10.7-24-24-24H160v-36.8h40c13.3 0 24-10.7 24-24s-10.7-24-24-24h-40V192h48c13.3 0 24-10.7 24-24s-10.7-24-24-24zm152 0c-13.3 0-24 10.7-24 24s10.7 24 24 24h49.2l-70.6 141.3c-3.7 7.4-3.3 16.3 1 23.4S279.7 368 288 368h88c13.3 0 24-10.7 24-24s-10.7-24-24-24h-49.2l70.6-141.3c3.7-7.4 3.3-16.3-1-23.4S384.3 144 376 144z"})
);

export default LanCircleEurozoneRegular;
