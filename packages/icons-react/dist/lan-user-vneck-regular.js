import React from 'react';

export const LanUserVneckRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M224 48a80 80 0 1 1 0 160 80 80 0 1 1 0-160M96 128a128 128 0 1 0 256 0 128 128 0 1 0-256 0m65.4 186.9c-5.8-6.1-14.3-8.7-22.5-7-79.4 17-139 87.6-139 172.1v8c0 13.3 10.7 24 24 24s24-10.7 24-24v-8c0-56.8 37.1-105.1 88.4-121.8l70.2 74.2c4.5 4.8 10.8 7.5 17.4 7.5s12.9-2.7 17.4-7.5l70.2-74.2c51.4 16.7 88.5 65 88.5 121.8v8c0 13.3 10.7 24 24 24s24-10.7 24-24v-8c0-84.5-59.6-155.1-139-172.1-8.2-1.8-16.7.9-22.5 7l-62.6 66.2-62.6-66.2z"})
);

export default LanUserVneckRegular;
