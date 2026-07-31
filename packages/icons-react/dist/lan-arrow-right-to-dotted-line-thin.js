import React from 'react';

export const LanArrowRightToDottedLineThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M480 432a16 16 0 1 1 32 0 16 16 0 1 1-32 0M229.7 98.3l152 152c3.1 3.1 3.1 8.2 0 11.3l-152 152c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L356.7 264H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h348.7L218.4 109.7c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0zM496 328a16 16 0 1 1 0 32 16 16 0 1 1 0-32m-16-72a16 16 0 1 1 32 0 16 16 0 1 1-32 0m16-104a16 16 0 1 1 0 32 16 16 0 1 1 0-32m-16-72a16 16 0 1 1 32 0 16 16 0 1 1-32 0"})
);

export default LanArrowRightToDottedLineThin;
