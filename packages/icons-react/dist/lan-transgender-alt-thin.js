import React from 'react';

export const LanTransgenderAltThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -16 576 560',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M136-16c4.4 0 8 3.6 8 8s-3.6 8-8 8H43.3L128 84.7l26.3-26.4c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3L139.3 96l33.2 33.2C201.7 98.9 242.6 80 288 80s86.3 18.9 115.5 49.2L532.7 0H440c-4.4 0-8-3.6-8-8s3.6-8 8-8h112c4.4 0 8 3.6 8 8v112c0 4.4-3.6 8-8 8s-8-3.6-8-8V11.3l-130 130c21.3 27.2 34 61.4 34 98.7 0 85.7-67.4 155.6-152 159.8V464h56c4.4 0 8 3.6 8 8s-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8s-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8s3.6-8 8-8h56v-64.2c-84.6-4.2-152-74.1-152-159.8 0-37.2 12.7-71.5 34-98.7l-34-34-26.3 26.3c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L116.7 96 32 11.3V104c0 4.4-3.6 8-8 8s-8-3.6-8-8V-8c0-4.4 3.6-8 8-8zm152 400a144 144 0 1 0 0-288 144 144 0 1 0 0 288"})
);

export default LanTransgenderAltThin;
