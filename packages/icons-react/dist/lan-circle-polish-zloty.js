import React from 'react';

export const LanCirclePolishZloty = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m335.4-128c8.8 0 16 7.2 16 16v88.6l18.6-7.5c8.2-3.3 17.5.7 20.8 8.9s-.7 17.5-8.9 20.8L351.4 267v100.9c0 8.8-7.2 16-16 16s-16-7.2-16-16v-88.1l-17.5 7c-8.2 3.3-17.5-.7-20.8-8.9s.7-17.5 8.9-20.8l29.4-11.8V143.9c0-8.8 7.2-16 16-16zM152 192h88c5.5 0 10.7 2.9 13.6 7.6s3.2 10.6.7 15.6L185.9 352H248c8.8 0 16 7.2 16 16s-7.2 16-16 16h-88c-5.5 0-10.7-2.9-13.6-7.6s-3.2-10.6-.7-15.6L214.1 224H152c-8.8 0-16-7.2-16-16s7.2-16 16-16"})
);

export default LanCirclePolishZloty;
