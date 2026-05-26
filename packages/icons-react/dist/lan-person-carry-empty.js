import React from 'react';

export const LanPersonCarryEmpty = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M152 24a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-80 0a56 56 0 1 1 112 0 56 56 0 1 1-112 0m-8 152.5c0-35.6 28.9-64.5 64.5-64.5 25.5 0 48.6 15 58.9 38.3l34.3 77.2c7.7 17.3 24.9 28.5 43.9 28.5H304c8.8 0 16 7.2 16 16s-7.2 16-16 16h-38.4c-31.6 0-60.3-18.6-73.1-47.5l-.5-1.1V368c20.1 15.1 32 38.8 32 64v96c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96c0-15.1-7.1-29.3-19.2-38.4L96 336c-20.1-15.1-32-38.8-32-64zm0 195.4c1.1.8 2.1 1.7 3.2 2.5L96 396v132c0 8.8-7.2 16-16 16s-16-7.2-16-16zM128 144c-17.7 0-32 14.3-32 32v96c0 15.1 7.1 29.3 19.2 38.4L160 344V176c0-17.7-14.3-32-32-32"})
);

export default LanPersonCarryEmpty;
