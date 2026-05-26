import React from 'react';

export const LanChevronDoubleUpRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M241.5 39c-9.4-9.4-24.6-9.4-33.9 0L7.5 239c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l183-183 183 183c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9zm200 392-200-200c-9.4-9.4-24.6-9.4-33.9 0L7.5 431c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l183-183 183 183c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9z"})
);

export default LanChevronDoubleUpRegular;
