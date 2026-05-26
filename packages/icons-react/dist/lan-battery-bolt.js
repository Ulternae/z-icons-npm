import React from 'react';

export const LanBatteryBolt = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m296 299.4-37 97.2L418.8 256h-76.9c-10.5 0-20.4-5.2-26.4-13.8s-7.3-19.7-3.6-29.6l37-97.2L189.1 256H266c10.5 0 20.4 5.2 26.3 13.8s7.3 19.7 3.6 29.5zM440 224c10 0 18.9 6.2 22.5 15.5s.9 19.9-6.6 26.5l-200 176c-8.3 7.3-20.5 8-29.5 1.7s-12.7-18-8.7-28.3c28.1-74.2 44.3-116.6 48.4-127.4H168c-10 0-18.9-6.2-22.5-15.5s-.9-19.9 6.6-26.5l200-176c8.3-7.3 20.5-8 29.5-1.7s12.7 18 8.7 28.3C362.2 170.8 346 213.2 341.9 224zm-.4-128c1.2-10.9-.1-21.8-3.7-32H496c44.2 0 80 35.8 80 80v32h32c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32h-32v32c0 44.2-35.8 80-80 80H321.7l36.4-32H496c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48zM112 448c-44.2 0-80-35.8-80-80V144c0-44.2 35.8-80 80-80h174.3l-36.4 32H112c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h56.4c-1.2 10.9.1 21.8 3.7 32zm464-240v96h32v-96z"})
);

export default LanBatteryBolt;
