import React from 'react';

export const LanStarfighterTwinIonEngineAdvanced = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M124.8 25.6c5.3-7.1 3.9-17.1-3.2-22.4S104.5-.7 99.2 6.4L9.6 125.9C3.4 134.2 0 144.3 0 154.7v202.6c0 10.4 3.4 20.5 9.6 28.8l89.6 119.5c5.3 7.1 15.3 8.5 22.4 3.2s8.5-15.3 3.2-22.4L35.2 366.9c-2.1-2.8-3.2-6.1-3.2-9.6v-49.4l116.1 25.8C175.5 382.8 227.9 416 288 416s112.5-33.2 139.9-82.2L544 308v41.9c0 3.3-1 6.5-2.9 9.2l-90.2 127.7c-5.1 7.2-3.4 17.2 3.8 22.3s17.2 3.4 22.3-3.8l90.1-127.7c5.7-8.1 8.8-17.8 8.8-27.7V147.3c0-10.9-3.7-21.5-10.5-30L476.5 6C471-.9 460.9-2 454 3.5s-8 15.6-2.5 22.5l89 111.2c2.3 2.8 3.5 6.4 3.5 10V204l-116.1-25.8C400.5 129.2 348.1 96 288 96s-112.5 33.2-139.9 82.2L32 204.1v-49.4c0-3.5 1.1-6.8 3.2-9.6zm317.7 188.7L544 236.9v38.3l-101.5 22.6c3.6-13.3 5.5-27.3 5.5-41.7s-1.9-28.4-5.5-41.7zm-309 83.4L32 275.2v-38.4l101.5-22.5c-3.6 13.3-5.5 27.3-5.5 41.7s1.9 28.4 5.5 41.7M288 128a128 128 0 1 1 0 256 128 128 0 1 1 0-256m48 128a48 48 0 1 1-96 0 48 48 0 1 1 96 0m-48-80a80 80 0 1 0 0 160 80 80 0 1 0 0-160"})
);

export default LanStarfighterTwinIonEngineAdvanced;
