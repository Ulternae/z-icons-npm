import React from 'react';

export const LanGunSquirtRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M104 32c13.3 0 24 10.7 24 24v8h320c41.8 0 77.4 26.7 90.5 64H552c13.3 0 24 10.7 24 24v16c0 13.3-10.7 24-24 24h-13.5c-13.2 37.3-48.7 64-90.5 64H249l-18 72h41v-16c0-13.3 10.7-24 24-24s24 10.7 24 24v80c0 13.3-10.7 24-24 24s-24-10.7-24-24v-16h-53l-19.9 79.8C195.5 470 182.7 480 168 480H64c-9.9 0-19.2-4.5-25.2-12.3s-8.2-17.9-5.8-27.5l46.4-185.6C34.3 246.7 0 207.3 0 160c0-47.6 34.6-87.1 80-94.7V56c0-13.3 10.7-24 24-24m24.5 224-44 176h71l44-176zM448 208c26.5 0 48-21.5 48-48s-21.5-48-48-48H96c-26.5 0-48 21.5-48 48s21.5 48 48 48zM96 144h352c8.8 0 16 7.2 16 16s-7.2 16-16 16H96c-8.8 0-16-7.2-16-16s7.2-16 16-16"})
);

export default LanGunSquirtRegular;
