import React from 'react';

export const LanArrowLeftRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M7 239c-9.4 9.4-9.4 24.6 0 33.9L175 441c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L81.9 280H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H81.9L209 105c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0z"})
);

export default LanArrowLeftRegular;
