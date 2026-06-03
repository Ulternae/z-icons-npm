import React from 'react';

export const LanPeopleDressSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 576.062 576',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M104 24a56 56 0 1 1 112 0 56 56 0 1 1-112 0M80 400H62.2c-10.9 0-18.6-10.7-15.2-21.1l45.3-136-32.1 60.2c-8.3 15.6-27.7 21.5-43.3 13.1s-21.4-27.7-13.1-43.3L56.6 174c20.4-38.2 60.2-62 103.4-62s83 23.8 103.4 62l24.6 46.1 24.6-46.1c20.4-38.2 60.1-62 103.4-62s83 23.8 103.4 62l52.9 98.9c8.3 15.6 2.4 35-13.1 43.3s-35 2.4-43.3-13.1l-32.1-60.2 45.3 136c3.5 10.4-4.3 21.1-15.2 21.1h-17.8v112c0 17.7-14.3 32-32 32s-32-14.3-32-32V400h-32v112c0 17.7-14.3 32-32 32s-32-14.3-32-32V400h-17.8c-10.9 0-18.6-10.7-15.2-21.1l45.3-136-32.1 60.1c-5.6 10.5-16.5 17-28.3 17s-22.7-6.5-28.2-16.9l-32.1-60.2 45.3 136c3.5 10.4-4.3 21.1-15.2 21.1H240v112c0 17.7-14.3 32-32 32s-32-14.3-32-32V400h-32v112c0 17.7-14.3 32-32 32s-32-14.3-32-32zM360 24a56 56 0 1 1 112 0 56 56 0 1 1-112 0"})
);

export default LanPeopleDressSolid;
