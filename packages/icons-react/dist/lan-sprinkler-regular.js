import React from 'react';

export const LanSprinklerRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0m24 80a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0 104a24 24 0 1 1 0 48 24 24 0 1 1 0-48M88 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48M64 184a24 24 0 1 1 48 0 24 24 0 1 1-48 0m88-80a24 24 0 1 1 0 48 24 24 0 1 1 0-48m360 128a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-24-128a24 24 0 1 1 0 48 24 24 0 1 1 0-48m24-80a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-88 24a24 24 0 1 1 0 48 24 24 0 1 1 0-48m24 136a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-88-80a24 24 0 1 1 0 48 24 24 0 1 1 0-48M97.8 270.8c3.7-9 12.5-14.8 22.2-14.8h112V88c0-13.3 10.7-24 24-24s24 10.7 24 24v168h112c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2l-89 89v86.1c0 22.1-17.9 40-40 40h-48c-22.1 0-40-17.9-40-40V386l-89-89c-6.9-6.9-8.9-17.2-5.2-26.2M256 304h-78.1l55 55c4.5 4.5 7 10.6 7 17v88h32v-88c0-6.4 2.5-12.5 7-17l55-55h-78.1z"})
);

export default LanSprinklerRegular;
