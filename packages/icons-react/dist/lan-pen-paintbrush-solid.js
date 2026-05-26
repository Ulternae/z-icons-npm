import React from 'react';

export const LanPenPaintbrushSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m214.3 123.8-90.5 90.5-105.1-105c-25-25-25-65.5 0-90.5s65.5-25 90.5 0zm235.7 176c36.7 18.4 62 56.4 62 100.2 0 3.9-.2 7.8-.6 11.6-1.8 17.5 10.2 36.4 27.8 36.4h4.8c17.7 0 32 14.3 32 32s-14.3 32-32 32H400c-43.9 0-81.8-25.2-100.2-62zM436 0c19.2 0 37.6 7.6 51.1 21.2l35.7 35.7C536.4 70.4 544 88.8 544 108s-7.6 37.6-21.2 51.1L477.9 204 340 66.1l44.9-44.9C398.4 7.6 416.8 0 436 0M90.9 315.1 306.1 100 444 237.9 228.9 453.1c-10.7 10.7-24.1 18.5-38.7 22.6L62.4 511.1c-8.3 2.3-17.3 0-23.4-6.2s-8.5-15.1-6.2-23.4l35.6-127.7c4.1-14.6 11.8-27.9 22.6-38.7z"})
);

export default LanPenPaintbrushSolid;
