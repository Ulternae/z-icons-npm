import React from 'react';

export function LanPersonGolfingSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '-0.011 -32 448.011 576.067',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M360.5 9.4C365.1 5 368-1.2 368-8c0-13.3-10.7-24-24-24H40c-10.3 0-19.5 6.6-22.8 16.4l-16 48C-1.2 39.7 0 47.8 4.5 54S16.3 64 24 64h32c10.3 0 19.5-6.6 22.8-16.4L89.3 16h202.9l42.6 85.2c3.8 7.7.9 17-6.5 21.1l-75.5 42c-31.2 17.3-42.2 56.7-24.5 87.7l28.3 49.5c6 10.5 5.6 23.5-1.2 33.6l-106 159.2c-9.8 14.7-5.8 34.6 8.9 44.4s34.6 5.8 44.4-8.9l106-159.1c3.2-4.8 6-9.9 8.2-15.2l-12.8 153.9c-1.5 17.6 11.6 33.1 29.2 34.5s33.1-11.6 34.5-29.2L382.7 337c1.2-14.2-.8-28.4-5.8-41.7l-39.3-104.9 21.8-12.1c37.4-20.8 51.9-67.4 32.7-105.7zM280 96a56 56 0 1 0-112 0 56 56 0 1 0 112 0"})
  );
}

export default LanPersonGolfingSolid;
