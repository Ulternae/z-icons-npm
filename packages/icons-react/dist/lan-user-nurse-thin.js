import React from 'react';

export const LanUserNurseThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -29.1 448 541.1',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M336 112H112V44.9c0-6.4 3.8-12.1 9.6-14.7l96-42c4.1-1.8 8.7-1.8 12.8 0l96 42c5.8 2.5 9.6 8.3 9.6 14.7zM115.2 15.6C103.5 20.7 96 32.2 96 44.9V144c0 70.7 57.3 128 128 128s128-57.3 128-128V44.9c0-12.7-7.5-24.2-19.2-29.3l-96-42c-8.2-3.6-17.5-3.6-25.7 0l-96 42zM112 128h224v16c0 61.9-50.1 112-112 112s-112-50.1-112-112zm38.3 182.1c-1.9-2.3-4.9-3.4-7.8-2.9C61.3 322.9 0 394.3 0 480v24c0 4.4 3.6 8 8 8s8-3.6 8-8v-24c0-76.3 53.4-140.1 124.8-156.1l76.9 97.1c1.5 1.9 3.8 3 6.3 3s4.8-1.1 6.3-3l76.9-97.1C378.6 339.9 432 403.7 432 480v24c0 4.4 3.6 8 8 8s8-3.6 8-8v-24c0-85.7-61.3-157.2-142.5-172.8-2.9-.6-5.9.5-7.8 2.9l-73.7 93zM216 16v24h-24c-4.4 0-8 3.6-8 8s3.6 8 8 8h24v24c0 4.4 3.6 8 8 8s8-3.6 8-8V56h24c4.4 0 8-3.6 8-8s-3.6-8-8-8h-24V16c0-4.4-3.6-8-8-8s-8 3.6-8 8"})
);

export default LanUserNurseThin;
