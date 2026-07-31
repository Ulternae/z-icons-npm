import React from 'react';

export const LanRouterSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 513.511 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M320.2 48c58.8 0 112.5 21.8 153.4 57.9 9.9 8.8 25.1 7.8 33.9-2.1s7.8-25.1-2.1-33.9C456 26.4 391.2 0 320.2 0S184.5 26.4 135.1 69.9c-9.9 8.8-10.9 23.9-2.1 33.9s23.9 10.9 33.9 2.1C207.8 69.8 261.4 48 320.2 48m24 200c0-13.3-10.7-24-24-24s-24 10.7-24 24v72h-232c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64v-32c0-35.3-28.7-64-64-64h-104zm-99.5-61.3c20.7-16.7 46.9-26.7 75.5-26.7s54.9 10 75.5 26.7c10.3 8.3 25.4 6.8 33.8-3.5s6.8-25.4-3.5-33.8C397.1 126 360.2 112 320.2 112s-76.8 14-105.7 37.4c-10.3 8.3-11.9 23.5-3.5 33.8s23.5 11.9 33.8 3.5zM112.2 400a24 24 0 1 1-48 0 24 24 0 1 1 48 0m72 24a24 24 0 1 1 0-48 24 24 0 1 1 0 48"})
);

export default LanRouterSolid;
