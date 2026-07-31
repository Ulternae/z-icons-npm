import React from 'react';

export const LanMugHot = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M144 0c-8.8 0-16 7.2-16 16 0 35.3 20.9 53.6 36.6 67.3l.8.7c16.2 14.2 26.5 23.9 26.5 44 0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3-20.9-53.6-36.6-67.3l-.8-.7C170.3 45.8 160 36.1 160 16c0-8.8-7.2-16-16-16M96 224h320v192c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64zm352 0h16c44.2 0 80 35.8 80 80s-35.8 80-80 80h-16zm0 192h16c61.9 0 112-50.1 112-112s-50.1-112-112-112H96c-17.7 0-32 14.3-32 32v192c0 53 43 96 96 96h192c53 0 96-43 96-96M288 16c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 35.3 20.9 53.6 36.6 67.3l.8.7c16.2 14.2 26.5 23.9 26.5 44 0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3-20.9-53.6-36.6-67.3l-.8-.7C298.3 45.8 288 36.1 288 16"})
);

export default LanMugHot;
