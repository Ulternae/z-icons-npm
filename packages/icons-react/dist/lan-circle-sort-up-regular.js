import React from 'react';

export const LanCircleSortUpRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m273-153 80 80c6.9 6.9 8.9 17.2 5.2 26.2S345.7 224 336 224H176c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2l80-80c9.4-9.4 24.6-9.4 33.9 0zm80 226-80 80c-9.4 9.4-24.6 9.4-33.9 0l-80-80c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l63 63 63-63c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"})
);

export default LanCircleSortUpRegular;
