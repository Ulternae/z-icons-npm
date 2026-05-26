import React from 'react';

export const LanOutletSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm0 224c0-61.1 30.8-99.1 49.7-116.6 8.8-8.2 20.7-11.4 32.6-11.4h155.3c12 0 23.9 3.3 32.6 11.4 18.9 17.5 49.7 55.5 49.7 116.6s-30.8 99-49.7 116.6c-8.8 8.2-20.7 11.4-32.6 11.4H146.3c-12 0-23.9-3.3-32.6-11.4C94.8 355.1 64 317.1 64 256m104-80c-13.3 0-24 10.7-24 24v32c0 13.3 10.7 24 24 24s24-10.7 24-24v-32c0-13.3-10.7-24-24-24m112 0c-13.3 0-24 10.7-24 24v32c0 13.3 10.7 24 24 24s24-10.7 24-24v-32c0-13.3-10.7-24-24-24m-56 112c-17.7 0-32 14.3-32 32v16h64v-16c0-17.7-14.3-32-32-32"})
);

export default LanOutletSolid;
