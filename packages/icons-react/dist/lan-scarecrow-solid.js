import React from 'react';

export const LanScarecrowSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 448 576',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M336 80c0 17.2-3.9 33.5-10.8 48H416c5.9 0 11.3 3.2 14.1 8.5s2.5 11.5-.8 16.4l-7.6 11.4 19.9 14.9c4 3 6.4 7.8 6.4 12.8s-2.4 9.8-6.4 12.8l-19.9 14.9 7.6 11.4c3.3 4.9 3.6 11.2.8 16.4s-8.2 8.5-14.1 8.5h-73c-10.1 0-17.7 9.2-15.7 19.1l20.5 102.6c4 19.8-11.2 38.3-31.4 38.3h-60.5v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96h-60.5c-20.2 0-35.3-18.5-31.4-38.3l20.5-102.6c2-9.9-5.6-19.1-15.7-19.1h-73c-5.9 0-11.3-3.2-14.1-8.5s-2.5-11.5.8-16.4l7.6-11.4-19.9-14.9C2.4 201.8 0 197 0 192s2.4-9.8 6.4-12.8l19.9-14.9-7.6-11.4c-3.3-4.9-3.6-11.2-.8-16.4S26.1 128 32 128h90.8c-6.9-14.5-10.8-30.8-10.8-48 0-61.9 50.1-112 112-112S336 18.1 336 80M208 56a24 24 0 1 0-48 0 24 24 0 1 0 48 0m56 40a24 24 0 1 0 0-48 24 24 0 1 0 0 48"})
);

export default LanScarecrowSolid;
