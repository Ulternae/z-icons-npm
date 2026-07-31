import React from 'react';

export const LanFaceUnamused = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m190.6 123.3c-6.2 6.3-16.3 6.3-22.6.1s-6.3-16.3-.1-22.6c22.5-22.7 53.6-36.8 88.1-36.8s65.6 14.1 88.1 36.7c6.2 6.3 6.2 16.4-.1 22.6s-16.4 6.2-22.6-.1C304.7 362.4 281.6 352 256 352s-48.7 10.4-65.4 27.3M112 192h64c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16m176 16c0-8.8 7.2-16 16-16h64c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32h-32c-8.8 0-16-7.2-16-16"})
);

export default LanFaceUnamused;
