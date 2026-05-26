import React from 'react';

export const LanKeyThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M287.2 328.4c15.4 4.9 31.8 7.6 48.8 7.6 88.4 0 160-71.6 160-160S424.4 16 336 16 176 87.6 176 176c0 17.1 2.7 33.5 7.6 48.8 1.8 5.7.3 12-3.9 16.2L18.3 402.3c-1.5 1.5-2.3 3.5-2.3 5.7v80c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-40c0-8.8 7.2-16 16-16h40c4.4 0 8-3.6 8-8v-40c0-8.8 7.2-16 16-16h40c2.1 0 4.2-.8 5.7-2.3l33.3-33.4c4.2-4.2 10.5-5.8 16.2-3.9M336 352c-18.7 0-36.8-2.9-53.7-8.3L249 377c-4.5 4.5-10.6 7-17 7h-40v40c0 13.3-10.7 24-24 24h-40v40c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24v-80c0-6.4 2.5-12.5 7-17l161.3-161.3c-5.4-16.9-8.3-35-8.3-53.7C160 78.8 238.8 0 336 0s176 78.8 176 176-78.8 176-176 176m32-248a40 40 0 1 1 0 80 40 40 0 1 1 0-80m24 40a24 24 0 1 0-48 0 24 24 0 1 0 48 0"})
);

export default LanKeyThin;
