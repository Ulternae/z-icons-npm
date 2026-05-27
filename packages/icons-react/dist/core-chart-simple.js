import React from 'react';

export const CoreChartSimple = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M288 64h-64v384h64zm64 96v288h96V160zm0-64h96c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64h96V64c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64zM160 256H64v192h96z"})
);

export default CoreChartSimple;
