import React from 'react';

export const CoreTvRetroRegular-duo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 160h224v256H64z","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"M182.6 9.4 160-13.3 114.7 32l64 64H64c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H333.3l64-64L352-13.3l-96 96zM64 160h384v256H64zm344 80a40 40 0 1 0-80 0 40 40 0 1 0 80 0m-40 136a40 40 0 1 0 0-80 40 40 0 1 0 0 80"})
);

export default CoreTvRetroRegular-duo;
