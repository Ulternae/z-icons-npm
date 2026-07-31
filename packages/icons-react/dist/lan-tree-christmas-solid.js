import React from 'react';

export const LanTreeChristmasSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -64 512 576.1',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m403.8 170.2 1.8 2.6c3.7 6.2 4.2 13.9 1 20.6-3.6 7.6-11.3 12.5-19.7 12.5h-27.8l91.2 106.6c6.1 7.1 7.5 17.1 3.6 25.6s-12.5 14-21.8 14h-53l103.2 120.4 2.1 2.8c4.3 6.8 5 15.4 1.5 22.8-3.9 8.5-12.5 14-21.8 14L48 512c-9.4 0-17.9-5.5-21.8-14s-2.5-18.5 3.6-25.7L133 352H80c-9.4 0-17.9-5.5-21.8-14s-2.5-18.5 3.6-25.6L153 205.8h-27.8c-8.4 0-16.1-4.9-19.7-12.5s-2.5-16.6 2.8-23.2L184.5 77l7.7 2.8 10 26.7 1.7 4.1c9.4 20.1 29.7 33.2 52.2 33.3 24 0 45.5-14.9 53.9-37.4l10-26.7 7.7-2.8 76.2 93.1zM320 392a24 24 0 1 0 0 48 24 24 0 1 0 0-48M192 264a24 24 0 1 0 0 48 24 24 0 1 0 0-48m64-328c4 0 7.6 2.5 9 6.2l17.7 47.1L329.8 7c3.8 1.4 6.2 5 6.2 9s-2.5 7.6-6.2 9l-47.1 17.7L265 89.8c-1.4 3.7-5 6.2-9 6.2s-7.6-2.5-9-6.2l-17.7-47.1L182.2 25c-3.7-1.4-6.2-5-6.2-9s2.5-7.6 6.2-9l47.1-17.7L247-57.8c1.4-3.8 5-6.2 9-6.2"})
);

export default LanTreeChristmasSolid;
