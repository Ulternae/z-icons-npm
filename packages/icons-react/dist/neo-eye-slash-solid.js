import React from 'react';

export const NeoEyeSlashSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 616 560',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M75.8 8.2C64.9-2.7 47.1-2.7 36.2 8.2s-10.9 28.7 0 39.6l504 504c10.9 10.9 28.7 10.9 39.6 0s10.9-28.7 0-39.6l-67.4-67.4c42.3-34.3 70.3-73 85.7-97.7 13.2-21.2 17.8-44.9 17.8-67.1s-4.6-45.9-17.8-67.1C565.8 160.8 473.9 42 308 42c-62.6 0-114.9 17-157.4 41zM62.8 167c8-.5 15.8 2.5 21.5 8.1l291.3 291.3c7.4 7.4 10.1 18.4 6.8 28.4s-11.8 17.4-22.2 19c-16.5 2.7-33.9 4.2-52.2 4.2-165.9 0-257.8-118.8-290.2-170.9C4.6 325.9 0 302.2 0 280s4.6-45.9 17.8-67.1c6.2-10 14.4-22.1 24.6-35.2 4.9-6.3 12.3-10.2 20.4-10.7"})
);

export default NeoEyeSlashSolid;
