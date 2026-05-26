import React from 'react';

export const LanFaceSmirking = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m96-48c0-8.8 7.2-16 16-16h64c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32h-32c-8.8 0-16-7.2-16-16m208-16h64c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16m64 144c0 26.5-21.5 48-48 48H176c-8.8 0-16-7.2-16-16s7.2-16 16-16h144c8.8 0 16-7.2 16-16s7.2-16 16-16 16 7.2 16 16"})
);

export default LanFaceSmirking;
