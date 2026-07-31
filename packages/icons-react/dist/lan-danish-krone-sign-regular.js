import React from 'react';

export const LanDanishKroneSignRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M72 16c13.3 0 24 10.7 24 24v252.3l150.7-157c9.2-9.6 24.4-9.9 33.9-.7s9.9 24.4.7 33.9L170.6 283.9l112.9 158.2c7.7 10.8 5.2 25.8-5.6 33.5s-25.8 5.2-33.5-5.6L136.8 319.2 96 361.7V456c0 13.3-10.7 24-24 24s-24-10.7-24-24V40c0-13.3 10.7-24 24-24m318.4 220.8c-9.3 12.5-14.4 27.6-14.4 43.2v176c0 13.3-10.7 24-24 24s-24-10.7-24-24V184c0-13.3 10.7-24 24-24s24 10.7 24 24c20.5-15.4 45.7-24 72-24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24h-16c-22.7 0-44 10.7-57.6 28.8M464 416a32 32 0 1 1 0 64 32 32 0 1 1 0-64"})
);

export default LanDanishKroneSignRegular;
