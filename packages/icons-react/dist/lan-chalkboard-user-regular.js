import React from 'react';

export const LanChalkboardUserRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M192 80h352c8.8 0 16 7.2 16 16v288c0 8.8-7.2 16-16 16h-32v-16c0-17.7-14.3-32-32-32h-96c-17.7 0-32 14.3-32 32v16h-38.9c9.4 14.4 16.3 30.6 19.9 48h211c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H192c-35.3 0-64 28.7-64 64v49c5.2-.7 10.6-1 16-1 11 0 21.8 1.4 32 4V96c0-8.8 7.2-16 16-16m-48 272a80 80 0 1 0 0-160 80 80 0 1 0 0 160m-48 32c-53 0-96 43-96 96 0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32 0-53-43-96-96-96z"})
);

export default LanChalkboardUserRegular;
