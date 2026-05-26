import React from 'react';

export const LanPersonBooth = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96 48a24 24 0 1 0 0-48 24 24 0 1 0 0 48m0-80a56 56 0 1 1 0 112 56 56 0 1 1 0-112m.5 144c25.5 0 48.6 15 58.9 38.3l34.3 77.2c7.7 17.3 24.9 28.5 43.9 28.5H272c8.8 0 16 7.2 16 16s-7.2 16-16 16h-38.4c-31.6 0-60.3-18.6-73.1-47.5l-.5-1.1V368c20.1 15.1 32 38.8 32 64v96c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96c0-15.1-7.1-29.3-19.2-38.4L64 336c-20.1-15.1-32-38.8-32-64v-95.5c0-35.6 28.9-64.5 64.5-64.5M32 528V371.9c1.1.8 2.1 1.7 3.2 2.5L64 396v132c0 8.8-7.2 16-16 16s-16-7.2-16-16m96-352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 15.1 7.1 29.3 19.2 38.4L128 344zm278.3 56.8c1.6 3.2 2.1 6.9 1.4 10.4l-36 172.7H544v-368c0-8.8-7.2-16-16-16l-222.1.1zM544 528v-80H352c-4.8 0-9.4-2.2-12.4-5.9s-4.2-8.6-3.3-13.4l38.9-186.6L288 67.7v136.2h-32v-156c0-26.5 21.5-48 48-48L528 0c26.5 0 48 21.5 48 48v480c0 8.8-7.2 16-16 16s-16-7.2-16-16m-256 0c0 8.8-7.2 16-16 16s-16-7.2-16-16V340h32z"})
);

export default LanPersonBooth;
