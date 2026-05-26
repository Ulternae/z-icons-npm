import React from 'react';

export const LanOctagonRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M364.8 14.1c-9-9-21.2-14.1-33.9-14.1L182 .1c-12.7 0-24.9 5.1-33.9 14.1L14.6 147.6c-9 9-14.1 21.2-14.1 33.9v148.8c0 12.7 5.1 24.9 14.1 33.9l133.5 133.7c9 9 21.2 14.1 33.9 14.1h148.8c12.7 0 24.9-5.1 33.9-14.1l133.6-133.5c9-9 14.1-21.2 14.1-33.9V181.7c0-12.7-5.1-24.9-14.1-33.9zM182 48.1h148.8l133.5 133.5v148.8L330.8 463.9H182L48.5 330.4V181.6z"})
);

export default LanOctagonRegular;
