import React from 'react';

export const LanCameraCctvThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M151.7 22.1c-25-9.1-52.5 3.7-61.6 28.6L35.4 201.1c-9.1 24.9 3.8 52.5 28.7 61.5l207.8 75.6c5.5 2 11.6.9 16-2.9l193.5-167.9c9.2-8 6.5-22.9-5-27.1zM75.1 45.3c12.1-33.2 48.8-50.4 82-38.3l324.8 118.2c22.9 8.3 28.5 38.3 10 54.2l-193.5 168c-8.8 7.6-21 9.9-31.9 5.9l-82.2-29.9V416c0 22.1-17.9 40-40 40h-96v48c0 4.4-3.6 8-8 8s-8-3.6-8-8V392c0-4.4 3.6-8 8-8s8 3.6 8 8v48h96c13.3 0 24-10.7 24-24v-98.4L58.6 277.7c-33.2-12.1-50.3-48.8-38.3-82zm374.4 374.6-113.8-41.4 13.8-12 105.4 38.4c8.3 3 17.5-1.3 20.5-9.6L519.3 275c3-8.3-1.3-17.5-9.6-20.5l-21.9-8 13.8-12 13.6 4.9c16.6 6 25.2 24.4 19.1 41l-43.7 120.4c-6 16.6-24.4 25.2-41 19.1z"})
);

export default LanCameraCctvThin;
