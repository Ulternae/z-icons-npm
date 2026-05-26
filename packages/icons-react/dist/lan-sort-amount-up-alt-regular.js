import React from 'react';

export const LanSortAmountUpAltRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M145 39c-9.4-9.4-24.6-9.4-33.9 0L7 143c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l63-63V456c0 13.3 10.7 24 24 24s24-10.7 24-24V113.9l63 63c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9zm167 9c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24zm0 128c-13.3 0-24 10.7-24 24s10.7 24 24 24h112c13.3 0 24-10.7 24-24s-10.7-24-24-24zm0 128c-13.3 0-24 10.7-24 24s10.7 24 24 24h176c13.3 0 24-10.7 24-24s-10.7-24-24-24zm0 128c-13.3 0-24 10.7-24 24s10.7 24 24 24h240c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
);

export default LanSortAmountUpAltRegular;
