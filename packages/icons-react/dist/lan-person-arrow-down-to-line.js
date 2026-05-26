import React from 'react';

export const LanPersonArrowDownToLine = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M192 48a24 24 0 1 0 0-48 24 24 0 1 0 0 48m0-80a56 56 0 1 1 0 112 56 56 0 1 1 0-112m-80 218.1c-1.1 1.6-2.2 3.3-3.2 5L45.7 296.2c-4.5 7.6-14.4 10-22 5.5s-10-14.4-5.5-21.9l63.2-105.2C104.7 135.8 146.7 112 192 112s87.3 23.8 110.6 62.6l63.1 105.1c4.5 7.6 2.1 17.4-5.5 21.9s-17.4 2.1-22-5.5l-63-105c-1-1.7-2.1-3.4-3.2-5V512h288c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h96zM144 512h96V368h-96zm96-355.3c-14.4-8.2-30.9-12.7-48-12.7s-33.6 4.5-48 12.7V336h96zm315.3-56c6.2 6.2 6.2 16.4 0 22.6l-80 80c-6.2 6.2-16.4 6.2-22.6 0l-80-80c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l52.7 52.7V-16c0-8.8 7.2-16 16-16s16 7.2 16 16v169.4l52.7-52.7c6.2-6.2 16.4-6.2 22.6 0"})
);

export default LanPersonArrowDownToLine;
