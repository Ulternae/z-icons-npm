import React from 'react';

export const LanCutlery = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M33.1 0C42 .7 48.6 8.3 48 17.1L36.9 172.6c-2 27.8 20 51.4 47.9 51.4h54.5c27.9 0 49.9-23.6 47.9-51.4L176 17.1c-.6-8.8 6-16.4 14.9-17.1s16.4 6 17.1 14.9l11.1 155.4c3.3 46.3-33.4 85.7-79.8 85.7H128v240c0 8.8-7.2 16-16 16s-16-7.2-16-16V256H84.7c-46.4 0-83.1-39.4-79.8-85.7L16 14.9C16.7 6 24.3-.6 33.1 0m55.7 0c8.8.4 15.6 8 15.2 16.8l-8 160c-.4 8.8-8 15.6-16.8 15.2s-15.6-8-15.2-16.8l8-160C72.5 6.4 80-.4 88.8 0m46.4 0c8.8-.4 16.3 6.4 16.8 15.2l8 160c.4 8.8-6.4 16.3-15.2 16.8s-16.3-6.4-16.8-15.2l-8-160C119.6 8 126.4.5 135.2 0M288 136C288 60.9 348.9 0 424 0h8c8.8 0 16 7.2 16 16v480c0 8.8-7.2 16-16 16s-16-7.2-16-16V352h-64c-35.3 0-64-28.7-64-64zm128 184V32.3c-53.7 4.1-96 49-96 103.7v152c0 17.7 14.3 32 32 32z"})
);

export default LanCutlery;
