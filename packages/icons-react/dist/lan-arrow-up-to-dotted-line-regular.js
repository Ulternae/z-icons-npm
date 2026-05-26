import React from 'react';

export const LanArrowUpToDottedLineRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 32a32 32 0 1 1-64 0 32 32 0 1 1 64 0m111 103c9.4-9.4 24.6-9.4 33.9 0L345 271c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-95-95V488c0 13.3-10.7 24-24 24s-24-10.7-24-24V209.9l-95 95c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9zm-36.3-71a32 32 0 1 1 0-64 32 32 0 1 1 0 64m138.6-32a32 32 0 1 1-64 0 32 32 0 1 1 64 0M352 64a32 32 0 1 1 0-64 32 32 0 1 1 0 64"})
);

export default LanArrowUpToDottedLineRegular;
