import React from 'react';

export const LanShoeSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 336V224c0-26.5 21.5-48 48-48h66.3c46 0 86.4-30.5 99-74.7l1.9-6.7c5.2-18.1 21.7-30.6 40.6-30.6 10.4 0 20.5 3.9 28.2 10.8l62.8 56.5L303 175c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l45.5-45.5 23.1 20.8c2.8 2.6 5.8 5 8.8 7.4L383 223c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39.7-39.7c2.8 1.2 5.6 2.4 8.5 3.5l92.8 35.7c36.5 14.1 63.9 43.7 75.7 79.6zm0 48h640v16c0 26.5-21.5 48-48 48H308.8c-13.8 0-27.4-2.2-40.5-6.6L192 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32z"})
);

export default LanShoeSolid;
