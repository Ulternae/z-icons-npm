import React from 'react';

export const LanSquareNairaRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M384 80c8.8 0 16 7.2 16 16v320c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm107.7 106.3c-6-8.6-16.9-12.4-26.9-9.2S128 141.5 128 152v104h-16c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v72c0 13.3 10.7 24 24 24s24-10.7 24-24v-72h41l59.3 85.7c6 8.6 16.9 12.4 26.9 9.2S320 370.5 320 360v-72h16c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16V152c0-13.3-10.7-24-24-24s-24 10.7-24 24v104h-18.8zM194.8 256H176v-27.2z"})
);

export default LanSquareNairaRegular;
