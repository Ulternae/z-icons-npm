import React from 'react';

export const LanWrenchRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 528',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M208 168C208 75.2 283.2 0 376 0c27.1 0 52.8 6.4 75.5 17.9 6.9 3.5 11.7 10 12.9 17.6s-1.3 15.3-6.7 20.8L384 130v30.1h30.1l73.7-73.7c5.4-5.4 13.2-7.9 20.8-6.7s14.2 6 17.6 12.9c11.4 22.7 17.9 48.4 17.9 75.5 0 92.8-75.2 168-168 168-16.6 0-32.7-2.4-47.9-6.9L152.6 504.6c-31.2 31.2-81.9 31.2-113.1 0s-31.2-81.9 0-113.1l175.4-175.6c-4.5-15.2-6.9-31.3-6.9-47.9M376 48c-66.3 0-120 53.7-120 120 0 16 3.1 31.3 8.8 45.2 3.6 8.9 1.6 19.2-5.3 26L73.3 425.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l186.2-186.2c6.8-6.8 17.1-8.9 26-5.3 13.9 5.7 29.2 8.8 45.2 8.8 66.3 0 120-53.7 120-120 0-6.9-.6-13.7-1.7-20.3L441 201c-4.5 4.5-10.6 7-17 7h-64c-13.3 0-24-10.7-24-24v-64c0-6.4 2.5-12.5 7-17l53.3-53.3c-6.6-1.1-13.4-1.7-20.3-1.7"})
);

export default LanWrenchRegular;
