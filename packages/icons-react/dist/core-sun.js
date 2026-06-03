import React from 'react';

export const CoreSun = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 576 576',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M333.3 13.3 368 48h128v128l80 80-80 80v128H368l-80 80-80-80H80V336L0 256l80-80V48h128l80-80zM368 112h-26.5L288 58.5 234.5 112H144v90.5L90.5 256l53.5 53.5V400h90.5l53.5 53.5 53.5-53.5H432v-90.5l53.5-53.5-53.5-53.5V112zm-32 144a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-152 0a104 104 0 1 1 208 0 104 104 0 1 1-208 0"})
);

export default CoreSun;
