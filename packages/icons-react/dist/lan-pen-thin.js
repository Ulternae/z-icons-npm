import React from 'react';

export const LanPenThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M364.2 32.5C374.8 21.9 389.1 16 404 16s29.2 5.9 39.8 16.5l35.7 35.7C490.1 78.8 496 93.1 496 108s-5.9 29.2-16.5 39.8L415.3 212 300 96.7zM288.7 108 404 223.3 185.6 441.8c-8.8 8.8-19.7 15.1-31.6 18.5L26.1 495.7c-2.8.8-5.8 0-7.8-2.1s-2.8-5-2.1-7.8l35.6-127.7c3.3-12 9.7-22.9 18.5-31.6zM404 0c-19.2 0-37.6 7.6-51.1 21.2l-294 294c-10.7 10.7-18.5 24.1-22.6 38.7L.9 481.6c-2.3 8.3 0 17.3 6.2 23.4s15.1 8.5 23.4 6.2l127.8-35.5c14.6-4.1 27.9-11.8 38.7-22.6l294-294c13.4-13.5 21-31.9 21-51.1s-7.6-37.6-21.2-51.1l-35.7-35.7C441.6 7.6 423.2 0 404 0"})
);

export default LanPenThin;
