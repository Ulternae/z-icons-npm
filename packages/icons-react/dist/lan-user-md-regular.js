import React from 'react';

export const LanUserMdRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M224 48a80 80 0 1 1 0 160 80 80 0 1 1 0-160M96 128a128 128 0 1 0 256 0 128 128 0 1 0-256 0m72 294.4V368h96v41c-21.2 9.3-36 30.4-36 55v24c0 11 9 20 20 20s20-9 20-20v-24c0-11 9-20 20-20s20 9 20 20v24c0 11 9 20 20 20s20-9 20-20v-24c0-24.6-14.8-45.7-36-55v-36.7c50.7 14 88 60.5 88 115.7 0 13.3 10.7 24 24 24s24-10.7 24-24c0-92.8-75.2-168-168-168H168C75.2 320 0 395.2 0 488c0 13.3 10.7 24 24 24s24-10.7 24-24c0-49.2 29.6-91.5 72-110v44.4c-14.3 8.3-24 23.8-24 41.6 0 26.5 21.5 48 48 48s48-21.5 48-48c0-17.8-9.7-33.3-24-41.6"})
);

export default LanUserMdRegular;
