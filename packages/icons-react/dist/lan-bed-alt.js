import React from 'react';

export const LanBedAlt = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 96v40.6c9.4-5.4 20.3-8.6 32-8.6h112c19.1 0 36.3 8.4 48 21.7 11.7-13.3 28.9-21.7 48-21.7h112c11.7 0 22.6 3.1 32 8.6V96c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32m416 96v48c19.4 14.6 32 37.8 32 64v160c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48H32v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-26.2 12.6-49.4 32-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64zm-32 33.6V192c0-17.7-14.3-32-32-32H304c-17.7 0-32 14.3-32 32v32h160c5.5 0 10.8.6 16 1.6M240 224v-32c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32v33.6c5.2-1 10.5-1.6 16-1.6zm240 80c0-26.5-21.5-48-48-48H80c-26.5 0-48 21.5-48 48v80h448z"})
);

export default LanBedAlt;
