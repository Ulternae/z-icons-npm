import React from 'react';

export const LanBoxOpenFullSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 518.324',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M315.8 170.5c2.9-8.3 4.5-17.2 4.5-26.5 0-44.2-35.8-80-80-80-24.5 0-46.5 11-61.2 28.4L132 65.5l-9-5.1C149.2 23.8 192 0 240.3 0 274 0 305 11.6 329.5 30.9 340.7 12.4 361.1 0 384.3 0h64c35.1 0 63.7 28.3 64 63.4l-3.7 2.1-60.3 34.4V64h-64v64h-.9c.3 2.8.5 5.7.7 8.6l-63.8 36.5zM602 242.6c-13.5 9-31.3 6.4-41.8-5.5v117.5c0 23-12.4 44.3-32.4 55.7l-176 99.7a63.95 63.95 0 0 1-63.1 0l-176-99.7c-20-11.3-32.4-32.5-32.4-55.6v-53.3l-33-17.7c-23.4-12.5-32.2-41.7-19.6-65.1l48.4-89.9c4.1-7.5 11-13.1 19.2-15.5s17.1-1.4 24.5 2.7l200.5 111.5L520.8 116c14.6-8.1 32.9-3.6 42.2 10.2l48 72c9.8 14.7 5.8 34.6-8.9 44.4zm-323.2 35-161.7-89.8L91.7 235l165.8 88.8z"})
);

export default LanBoxOpenFullSolid;
