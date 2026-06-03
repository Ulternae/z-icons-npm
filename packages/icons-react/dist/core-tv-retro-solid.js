import React from 'react';

export const CoreTvRetroSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -13.3 512 525.3',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m160-13.3 96 96 96-96L397.3 32l-64 64H448c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h114.7l-64-64zM288 416h160V160H288zm80-216a40 40 0 1 1 0 80 40 40 0 1 1 0-80m-40 136a40 40 0 1 1 80 0 40 40 0 1 1-80 0"})
);

export default CoreTvRetroSolid;
