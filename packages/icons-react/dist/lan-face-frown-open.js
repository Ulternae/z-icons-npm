import React from 'react';

export const LanFaceFrownOpen = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m176-72a24 24 0 1 1 0 48 24 24 0 1 1 0-48m136 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0m22.4 192.1c-22.4-9.5-47.7-14.8-74.5-14.8s-52 5.3-74.4 14.8c-11.2 4.7-23.8 3.1-32.8-3.6-9.7-7.2-14.9-20.4-9-33.9 19.2-44.1 64.2-74.7 116.2-74.7s97 30.6 116.2 74.7c5.9 13.6.8 26.7-9 33.9-9 6.6-21.5 8.3-32.8 3.5zM260 319.9c-36.9 0-68.5 20.3-83.9 49.5 25.6-10.4 54-16.1 83.9-16.1s58.4 5.8 84 16.1c-15.4-29.2-47.1-49.5-84-49.5"})
);

export default LanFaceFrownOpen;
