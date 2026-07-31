import React from 'react';

export const LanSunAltThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 576 576',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M288 448c4.4 0 8 3.6 8 8v80c0 4.4-3.6 8-8 8s-8-3.6-8-8v-80c0-4.4 3.6-8 8-8m-147.1-56.2c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3l-56.5 56.6c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l56.6-56.6zm282.8 0c3.1-3.1 8.2-3.1 11.3 0l56.6 56.6c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-56.6-56.6c-3.1-3.1-3.1-8.2 0-11.3M288 392a136 136 0 1 1 0-272 136 136 0 1 1 0 272m0-256a120 120 0 1 0 0 240 120 120 0 1 0 0-240M88 248c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8zm480 0c4.4 0 8 3.6 8 8s-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8s3.6-8 8-8zM84.3 52.3c3.1-3.1 8.2-3.1 11.3 0l56.6 56.6c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L84.3 63.7c-3.1-3.1-3.1-8.2 0-11.3zm396 0c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3L435 120.2c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3zM288-32c4.4 0 8 3.6 8 8v80c0 4.4-3.6 8-8 8s-8-3.6-8-8v-80c0-4.4 3.6-8 8-8"})
);

export default LanSunAltThin;
