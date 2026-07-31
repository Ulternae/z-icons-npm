import React from 'react';

export const LanCircleVideoRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m128-64c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v38.4l61-36.6c1.9-1.2 4.2-1.8 6.4-1.8 6.9 0 12.5 5.6 12.5 12.5v102.9c0 6.9-5.6 12.5-12.5 12.5-2.3 0-4.5-.6-6.4-1.8l-61-36.6v38.4c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32v-128z"})
);

export default LanCircleVideoRegular;
