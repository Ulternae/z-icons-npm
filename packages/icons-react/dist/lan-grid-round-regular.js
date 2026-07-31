import React from 'react';

export const LanGridRoundRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M112 88a24 24 0 1 1-48 0 24 24 0 1 1 48 0M88 24a64 64 0 1 0 0 128 64 64 0 1 0 0-128m24 232a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-24-64a64 64 0 1 0 0 128 64 64 0 1 0 0-128m0 208a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-64 24a64 64 0 1 0 128 0 64 64 0 1 0-128 0M280 88a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-24-64a64 64 0 1 0 0 128 64 64 0 1 0 0-128m0 208a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-64 24a64 64 0 1 0 128 0 64 64 0 1 0-128 0m88 168a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-24-64a64 64 0 1 0 0 128 64 64 0 1 0 0-128M424 64a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-64 24a64 64 0 1 0 128 0 64 64 0 1 0-128 0m88 168a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-24-64a64 64 0 1 0 0 128 64 64 0 1 0 0-128m0 208a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-64 24a64 64 0 1 0 128 0 64 64 0 1 0-128 0"})
);

export default LanGridRoundRegular;
