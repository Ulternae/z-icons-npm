import React from 'react';

export const LanWheelchair = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M192 64a24 24 0 1 0 0-48 24 24 0 1 0 0 48m0-80a56 56 0 1 1 0 112 56 56 0 1 1 0-112m-75.4 214c.5 4.8 1.4 9.7 2.6 14.6l4.2 16.8C70.6 245.2 32 294.1 32 352.1c0 70.7 57.3 128 128 128 53.7 0 99.7-33.1 118.7-80h34c-20.4 64.9-81 112-152.7 112-88.4 0-160-71.6-160-160 0-73.3 49.3-135.1 116.6-154zm80.2-4.8 22.6 90.5C224.7 305 243.9 320 266 320h17.5l-34.9-139.8c-3-11.9-13.6-20.2-25.9-20.2-17.4 0-30.1 16.3-25.9 33.2m82.8-20.7L316.5 320h37.8c24.2 0 46.4 13.7 57.2 35.4l44.5 89.1 34.8-11.6c8.4-2.8 17.4 1.7 20.2 10.1s-1.7 17.4-10.1 20.2l-48 16c-7.6 2.5-15.8-.9-19.4-8L383 369.7c-5.4-10.8-16.5-17.7-28.6-17.7H266c-36.7 0-68.7-25-77.6-60.6l-22.6-90.5c-9.3-37 18.8-72.9 56.9-72.9 26.9 0 50.4 18.3 56.9 44.5"})
);

export default LanWheelchair;
