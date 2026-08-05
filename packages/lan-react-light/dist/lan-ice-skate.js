import React from 'react';

export function LanIceSkate({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M304 0c8.8 0 16 7.2 16 16v212.1l91.6 27.5 7.4 2.6c36.5 14.3 61 49.6 61 89.4v28.5c0 22.1-17.9 40-40 40h-24v64h96c17.7 0 32-14.3 32-32v-16c0-8.8 7.2-16 16-16s16 7.2 16 16v16c0 35.3-28.7 64-64 64L16 512c-8.8 0-16-7.2-16-16s7.2-16 16-16h112v-64h-24c-22.1 0-40-17.9-40-40V80l.3-2.9c1.2-6.6 6.6-12 13.5-12.9L288 34.1V16c0-8.8 7.2-16 16-16M160 480h224v-64H160zM96 93.9V376c0 4.4 3.6 8 8 8h336c4.4 0 8-3.6 8-8v-28.5c0-26.5-16.3-50.1-40.6-59.6l-5-1.7L301.7 256H224c-8.8 0-16-7.2-16-16s7.2-16 16-16h64v-48h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16h64V66.4L96 93.8z"})
  );
}

export default LanIceSkate;
