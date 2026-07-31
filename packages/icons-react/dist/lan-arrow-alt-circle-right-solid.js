import React from 'react';

export const LanArrowAltCircleRightSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 256a256 256 0 1 0 512 0 256 256 0 1 0-512 0m387.3 11.3-104 104c-4.6 4.6-11.5 5.9-17.4 3.5s-9.9-8.3-9.9-14.8v-56h-96c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32h96v-56c0-6.5 3.9-12.3 9.9-14.8s12.9-1.1 17.4 3.5l104 104c6.2 6.2 6.2 16.4 0 22.6"})
);

export default LanArrowAltCircleRightSolid;
