import React from 'react';

export const LanWalletRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M88 32C39.4 32 0 71.4 0 120v240c0 48.6 39.4 88 88 88h336c48.6 0 88-39.4 88-88V216c0-48.6-39.4-88-88-88H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h304c22.1 0 40 17.9 40 40v144c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V120c0-22.1 17.9-40 40-40h368c13.3 0 24-10.7 24-24s-10.7-24-24-24zm296 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64"})
);

export default LanWalletRegular;
