import React from 'react';

export const LanSquarePolishZloty = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M384 64c17.7 0 32 14.3 32 32v320c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm239.4 96c8.8 0 16 7.2 16 16v88.6l18.6-7.5c8.2-3.3 17.5.7 20.8 8.9s-.7 17.5-8.9 20.8L319.4 267v100.9c0 8.8-7.2 16-16 16s-16-7.2-16-16v-88.1l-17.5 7c-8.2 3.3-17.5-.7-20.8-8.9s.7-17.5 8.9-20.8l29.4-11.8V143.9c0-8.8 7.2-16 16-16zM120 192h88c5.5 0 10.7 2.9 13.6 7.6s3.2 10.6.7 15.6L153.9 352H216c8.8 0 16 7.2 16 16s-7.2 16-16 16h-88c-5.5 0-10.7-2.9-13.6-7.6s-3.2-10.6-.7-15.6L182.1 224H120c-8.8 0-16-7.2-16-16s7.2-16 16-16"})
);

export default LanSquarePolishZloty;
