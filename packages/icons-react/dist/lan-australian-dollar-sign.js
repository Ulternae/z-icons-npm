import React from 'react';

export const LanAustralianDollarSign = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M384 32v32.2c-53.6 3.4-96 48-96 102.4 0 50.2 36.3 93 85.8 101.2l47.2 7.9c34.1 5.7 59 35.1 59 69.7 0 39-31.6 70.6-70.6 70.6H328c-8.8 0-16 7.2-16 16s7.2 16 16 16h56v32c0 8.8 7.2 16 16 16s16-7.2 16-16v-32.2c53.6-3.4 96-48 96-102.4 0-50.2-36.3-93-85.8-101.2l-47.2-7.9c-34.1-5.7-59-35.1-59-69.7 0-39 31.6-70.6 70.6-70.6H456c8.8 0 16-7.2 16-16s-7.2-16-16-16h-40V32c0-8.8-7.2-16-16-16s-16 7.2-16 16M194.3 351.8 224.5 468c2.2 8.6 11 13.7 19.5 11.5s13.7-11 11.5-19.5l-102-392.3C150.5 56.1 140 48 128 48s-22.5 8.1-25.5 19.7L.5 460c-2.2 8.6 2.9 17.3 11.5 19.5s17.3-2.9 19.5-11.5l30.2-116.2c.8.1 1.5.2 2.3.2h128c.8 0 1.6-.1 2.3-.2M186 320H70l58-223.2z"})
);

export default LanAustralianDollarSign;
