import React from 'react';

export const LanOctagonXmarkRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M330.9.1c12.7 0 24.9 5.1 33.9 14.1l133.5 133.4c9 9 14.1 21.2 14.1 33.9v148.8c0 12.7-5.1 24.9-14.1 33.9L364.8 497.9c-9 9-21.2 14.1-33.9 14.1H182.1c-12.7 0-24.9-5.1-33.9-14.1L14.6 364.4c-9-9-14.1-21.2-14.1-33.9V181.7c0-12.7 5.1-24.9 14.1-33.9L148.1 14.1c9-9 21.2-14.1 33.9-14.1h148.8zM48.5 181.6v148.8L182 463.9h148.8l133.5-133.5V181.6L330.8 48.1H182zm119-14.5c9.4-9.4 24.6-9.4 33.9 0l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9"})
);

export default LanOctagonXmarkRegular;
