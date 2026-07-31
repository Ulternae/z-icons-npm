import React from 'react';

export const LanPenAltThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M404 16c-14.9 0-29.2 5.9-39.8 16.5L300 96.7 415.3 212l64.2-64.2c10.6-10.6 16.5-24.9 16.5-39.8s-5.9-29.2-16.5-39.8l-35.7-35.7A56.24 56.24 0 0 0 404 16M288.7 85.4l64.2-64.2C366.4 7.6 384.8 0 404 0s37.6 7.6 51.1 21.2l35.7 35.7C504.4 70.4 512 88.8 512 108s-7.6 37.6-21.2 51.1l-294 294c-10.7 10.7-24.1 18.5-38.7 22.6L30.4 511.1c-8.3 2.3-17.3 0-23.4-6.2s-8.5-15.1-6.2-23.4l35.6-127.7c4.1-14.6 11.8-27.9 22.6-38.7L277.4 96.7l-25.1-25.1c-15.6-15.6-40.9-15.6-56.6 0l-118 118.1c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l118-118.1c21.9-21.9 57.3-21.9 79.2 0zm0 22.6L70.2 326.4c-8.8 8.8-15.1 19.7-18.5 31.6L16.3 485.9c-.8 2.8 0 5.8 2.1 7.8s5 2.8 7.8 2.1L154 460.3c12-3.3 22.9-9.7 31.6-18.5L404 223.4l-1.7-1.7L288.6 108z"})
);

export default LanPenAltThin;
