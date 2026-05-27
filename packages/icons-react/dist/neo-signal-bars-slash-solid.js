import React from 'react';

export const NeoSignalBarsSlashSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 616 560',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M75.8 8.2C64.9-2.7 47.1-2.7 36.2 8.2s-10.9 28.7 0 39.6l504 504c10.9 10.9 28.7 10.9 39.6 0s10.9-28.7 0-39.6l-9.2-9.2c25.9-5 45.4-27.7 45.4-55V112c0-30.9-25.1-56-56-56s-56 25.1-56 56v324.4l-56-56V168c0-15.5-12.5-28-28-28h-28c-30.9 0-56 25.1-56 56v72.4zM0 364c0-30.9 25.1-56 56-56h28c15.5 0 28 12.5 28 28v140c0 15.5-12.5 28-28 28H56c-30.9 0-56-25.1-56-56zm280 18.4V476c0 15.5-12.5 28-28 28h-56c-15.5 0-28-12.5-28-28V309.5c0-18.7 22.6-28.1 35.8-14.8l67.9 67.9c5.3 5.3 8.2 12.4 8.2 19.8z"})
);

export default NeoSignalBarsSlashSolid;
