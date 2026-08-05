import React from 'react';

export function LanBreadLoafRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M152 80h96c57.4 0 104 46.6 104 104v31c0 3.7-2.5 6.9-6.1 7.8l-7.8 1.9C327.5 227.4 320 237 320 248v144c0 22.1-17.9 40-40 40H120c-22.1 0-40-17.9-40-40V248c0-11-7.5-20.6-18.2-23.3l-7.8-1.9c-3.6-.9-6.1-4.1-6.1-7.8v-31C48 126.6 94.6 80 152 80m-32 400h336c48.6 0 88-39.4 88-88V271.2c18.3-3.7 32-19.8 32-39.2v-48c0-83.9-68.1-152-152-152H152C68.1 32 0 100.1 0 184v31c0 21.9 12.8 41.5 32 50.6V392c0 48.6 39.4 88 88 88m336-48h-97.6c6.1-12 9.6-25.6 9.6-40V272h128v120c0 22.1-17.9 40-40 40m-56.7-208c.5-2.9.7-5.9.7-9v-31c0-40.2-15.6-76.8-41.1-104H424c57.4 0 104 46.6 104 104v40z"})
  );
}

export default LanBreadLoafRegular;
