import React from 'react';

export const LanEmptySetRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M464 256c0-48.8-16.8-93.7-44.9-129.1L126.9 419.1C162.4 447.2 207.2 464 256 464c114.9 0 208-93.1 208-208M453.2 92.7C489.9 137 512 193.9 512 256c0 141.4-114.6 256-256 256-62.1 0-118.9-22.1-163.3-58.8L41 505c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6-.1-34l51.8-51.8C22.1 374.9 0 318.1 0 256 0 114.6 114.6 0 256 0c62.1 0 118.9 22.1 163.3 58.8L471 7c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM92.9 385.1 385.1 92.9C349.7 64.8 304.8 48 256 48 141.1 48 48 141.1 48 256c0 48.8 16.8 93.7 44.9 129.1"})
);

export default LanEmptySetRegular;
