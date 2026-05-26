import React from 'react';

export const LanCrop = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m416 118.6 91.3-91.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L393.4 96H176v32h185.4L128 361.4V16c0-8.8-7.2-16-16-16S96 7.2 96 16v80H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v240c0 26.5 21.5 48 48 48h192v-32H150.6L384 150.6V496c0 8.8 7.2 16 16 16s16-7.2 16-16v-80h80c8.8 0 16-7.2 16-16s-7.2-16-16-16h-80z"})
);

export default LanCrop;
