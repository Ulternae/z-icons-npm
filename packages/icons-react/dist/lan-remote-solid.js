import React from 'react';

export const LanRemoteSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 320 576',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256-32c35.3 0 64 28.7 64 64v352c0 88.4-71.6 160-160 160S0 472.4 0 384V32C0-3.3 28.7-32 64-32zm-96 464c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24m-80-80c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24m80 0c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24m80 0c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24M80 272a24 24 0 1 0 0 48 24 24 0 1 0 0-48m80 0a24 24 0 1 0 0 48 24 24 0 1 0 0-48m80 0a24 24 0 1 0 0 48 24 24 0 1 0 0-48M160 32a96 96 0 1 0 0 192 96 96 0 1 0 0-192m0 144a48 48 0 1 1 0-96 48 48 0 1 1 0 96"})
);

export default LanRemoteSolid;
