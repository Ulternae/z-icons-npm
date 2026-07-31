import React from 'react';

export const LanBookArrowRightRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 88C0 39.4 39.4 0 88 0h288c39.8 0 72 32.2 72 72v256c0 25-12.7 47-32 59.9V464h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H80c-44.2 0-80-35.8-80-80zm80 312c-17.7 0-32 14.3-32 32s14.3 32 32 32h288v-64zm-32-41.3c9.8-4.3 20.6-6.7 32-6.7h296c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H88c-22.1 0-40 17.9-40 40zM313 209l-64 64c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l23-23H152c-13.3 0-24-10.7-24-24s10.7-24 24-24h86.1l-23-23c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l64 64c9.4 9.4 9.4 24.6 0 33.9z"})
);

export default LanBookArrowRightRegular;
