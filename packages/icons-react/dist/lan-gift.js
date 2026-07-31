import React from 'react';

export const LanGift = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M308.5 58.7 273.9 128H352c26.5 0 48-21.5 48-48s-21.6-48-48.2-48c-18.3 0-35.1 10.4-43.3 26.7M160 160H48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM48 128h48c-10-13.4-16-30-16-48 0-44.2 36-80 80.2-80 30.4 0 58.3 17.2 71.9 44.4L256 92.2l23.9-47.8C293.5 17.2 321.4 0 351.8 0 395.9 0 432 35.8 432 80c0 18-6 34.6-16 48h48c26.5 0 48 21.5 48 48v32c0 20.9-13.4 38.7-32 45.3V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V253.3C13.4 246.7 0 228.9 0 208v-32c0-26.5 21.5-48 48-48m190.1 0-34.6-69.3c-8.2-16.3-25-26.7-43.3-26.7-26.6 0-48.2 21.5-48.2 48s21.5 48 48 48zM64 416c0 17.7 14.3 32 32 32h144V256H64zm208 32h144c17.7 0 32-14.3 32-32V256H272z"})
);

export default LanGift;
