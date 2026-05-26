import React from 'react';

export const LanCameraHomeRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M384 48c8.8 0 16 7.2 16 16v288c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16zM64 0C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h136v48h-80c-13.3 0-24 10.7-24 24s10.7 24 24 24h208c13.3 0 24-10.7 24-24s-10.7-24-24-24h-80v-48h136c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm272 208a112 112 0 1 0-224 0 112 112 0 1 0 224 0m-112-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128"})
);

export default LanCameraHomeRegular;
