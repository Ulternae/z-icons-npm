import React from 'react';

export const LanChevronCircleLeftRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M48 256a208 208 0 1 1 416 0 208 208 0 1 1-416 0m464 0a256 256 0 1 0-512 0 256 256 0 1 0 512 0M271 135 167 239c-9.4 9.4-9.4 24.6 0 33.9L271 377c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-87-87 87-87c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0z"})
);

export default LanChevronCircleLeftRegular;
