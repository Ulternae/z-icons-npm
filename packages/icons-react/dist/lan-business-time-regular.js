import React from 'react';

export const LanBusinessTimeRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 56v40h128V56c0-4.4-3.6-8-8-8H264c-4.4 0-8 3.6-8 8m-48 40V56c0-30.9 25.1-56 56-56h112c30.9 0 56 25.1 56 56v40h80c35.3 0 64 28.7 64 64v65.4c-15.1-6.9-31.2-11.9-48-14.8v-50.7c0-8.8-7.2-16-16-16H128c-8.8 0-16 7.2-16 16v96h257c-28.3 25-49.2 58.3-59 96h-22c-17.7 0-32-14.3-32-32v-16H112v112c0 8.8 7.2 16 16 16h178.7c2.8 16.8 7.8 32.9 14.8 48L128 480c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64zm144 304a144 144 0 1 1 288 0 144 144 0 1 1-288 0m144-80c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32v-48c0-8.8-7.2-16-16-16"})
);

export default LanBusinessTimeRegular;
