import React from 'react';

export const LanSpinner = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 32a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0 64a48 48 0 1 0 0-96 48 48 0 1 0 0 96m0 352a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0 64a48 48 0 1 0 0-96 48 48 0 1 0 0 96M32 256a16 16 0 1 1 32 0 16 16 0 1 1-32 0m64 0a48 48 0 1 0-96 0 48 48 0 1 0 96 0m368-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0 64a48 48 0 1 0 0-96 48 48 0 1 0 0 96M97.6 414.4a16 16 0 1 1 22.6-22.6 16 16 0 1 1-22.6 22.6m45.3-45.3A48 48 0 1 0 75 437a48 48 0 1 0 67.9-67.9M120.2 97.6a16 16 0 1 1-22.6 22.6 16 16 0 1 1 22.6-22.6M75 142.9A48 48 0 1 0 142.9 75 48 48 0 1 0 75 142.9m316.8 248.9a16 16 0 1 1 22.6 22.6 16 16 0 1 1-22.6-22.6M437 437a48 48 0 1 0-67.9-67.9A48 48 0 1 0 437 437"})
);

export default LanSpinner;
