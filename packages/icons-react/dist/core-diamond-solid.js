import React from 'react';

export const CoreDiamondSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -16 576 544',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M288-16c10.2 0 20.1 4.1 27.3 11.3l233.4 233.4c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L315.3 516.7c-7.2 7.2-17.1 11.3-27.3 11.3s-20.1-4.1-27.3-11.3L27.3 283.3C20.1 276.1 16 266.2 16 256s4.1-20.1 11.3-27.3L260.7-4.7C267.9-11.9 277.8-16 288-16"})
);

export default CoreDiamondSolid;
