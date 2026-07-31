import React from 'react';

export const LanCircleLocationArrowRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m358.2-73.3-84 196c-3.5 8.1-11.4 13.3-20.2 13.3-1.4 0-2.9-.1-4.4-.4-10.2-2.1-17.6-11.2-17.6-21.6v-90h-90c-10.4 0-19.5-7.4-21.5-17.6-2.1-10.2 3.3-20.5 12.9-24.6l196-84c8.5-3.5 18-1.7 24.2 4.7 6.4 6.3 8.2 15.9 4.7 24.2z"})
);

export default LanCircleLocationArrowRegular;
