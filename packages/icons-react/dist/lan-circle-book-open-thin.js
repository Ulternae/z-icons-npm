import React from 'react';

export const LanCircleBookOpenThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m264-66.1v172.2l3.2-1.6C299.5 344.4 335 336 371 336h2c6.1 0 11-4.9 11-11V171c0-6.1-4.9-11-11-11h-2c-31 0-61.7 7.2-89.4 21.1zm-16 172.2V189.9l-17.5-8.8C202.7 167.2 172.1 160 141 160h-2c-6.1 0-11 4.9-11 11v154c0 6.1 4.9 11 11 11h2c36 0 71.5 8.4 103.8 24.5zm8-186.1 18.4-9.2c30-15 63.1-22.8 96.6-22.8h2c14.9 0 27 12.1 27 27v154c0 14.9-12.1 27-27 27h-2c-33.5 0-66.6 7.8-96.6 22.8l-10.3 5.2c-5.1 2.5-11 2.5-16.1 0l-10.3-5.2c-30-15-63.1-22.8-96.6-22.8h-2c-14.9 0-27-12.1-27-27V171c0-14.9 12.1-27 27-27h2c33.5 0 66.6 7.8 96.6 22.8z"})
);

export default LanCircleBookOpenThin;
