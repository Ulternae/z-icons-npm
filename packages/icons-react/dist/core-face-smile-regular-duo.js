import React from 'react';

export const CoreFaceSmileRegular-duo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 256a192 192 0 1 0 384 0 192 192 0 1 0-384 0m60.4 68 41.5-24c18 31.1 51.6 52 90.1 52s72.1-20.9 90.1-52l41.5 24c-26.2 45.4-75.4 76-131.7 76s-105.4-30.6-131.6-76zM208 208a32 32 0 1 1-64 0 32 32 0 1 1 64 0m160 0a32 32 0 1 1-64 0 32 32 0 1 1 64 0","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"M448 256a192 192 0 1 0-384 0 192 192 0 1 0 384 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m256 96c38.5 0 72.1-20.9 90.1-52l41.5 24c-26.2 45.4-75.4 76-131.7 76s-105.4-30.6-131.6-76l41.5-24c18 31.1 51.6 52 90.1 52zM144 208a32 32 0 1 1 64 0 32 32 0 1 1-64 0m192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"})
);

export default CoreFaceSmileRegular-duo;
