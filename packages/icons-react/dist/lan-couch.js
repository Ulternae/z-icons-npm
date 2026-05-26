import React from 'react';

export const LanCouch = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96 184v48.6c19.1 11.1 32 31.7 32 55.4h384c0-23.7 12.9-44.4 32-55.4V184c0-48.6-39.4-88-88-88H184c-48.6 0-88 39.4-88 88m-32 40v-40c0-66.3 53.7-120 120-120h272c66.3 0 120 53.7 120 120v40c35.3 0 64 28.7 64 64v80c0 44.2-35.8 80-80 80H80c-44.2 0-80-35.8-80-80v-80c0-35.3 28.7-64 64-64m-32 64v80c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48v-80c0-17.7-14.3-32-32-32s-32 14.3-32 32v16c0 8.8-7.2 16-16 16H112c-8.8 0-16-7.2-16-16v-16c0-17.7-14.3-32-32-32s-32 14.3-32 32"})
);

export default LanCouch;
