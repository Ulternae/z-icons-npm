import React from 'react';

export const LanFaceSmilePlusSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M544-64c13.3 0 24 10.7 24 24V8h48c13.3 0 24 10.7 24 24s-10.7 24-24 24h-48v48c0 13.3-10.7 24-24 24s-24-10.7-24-24V56h-48c-13.3 0-24-10.7-24-24s10.7-24 24-24h48v-48c0-13.3 10.7-24 24-24M0 272a240 240 0 1 1 480 0 240 240 0 1 1-480 0m115.9 60.6c-10.7 7.8-13.1 22.8-5.3 33.5C139.7 406 186.8 432 240 432s100.3-26 129.4-65.9c7.8-10.7 5.4-25.7-5.3-33.5s-25.7-5.4-33.5 5.3c-20.4 28-53.4 46.1-90.6 46.1s-70.2-18.1-90.6-46.1c-7.8-10.7-22.8-13.1-33.5-5.3M160 256a32 32 0 1 0 0-64 32 32 0 1 0 0 64m192-32a32 32 0 1 0-64 0 32 32 0 1 0 64 0"})
);

export default LanFaceSmilePlusSolid;
