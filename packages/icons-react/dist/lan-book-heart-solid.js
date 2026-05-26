import React from 'react';

export const LanBookHeartSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96 512h320c17.7 0 32-14.3 32-32s-14.3-32-32-32v-66.7c18.6-6.6 32-24.4 32-45.3V48c0-26.5-21.5-48-48-48H96C43 0 0 43 0 96v320c0 53 43 96 96 96m-32-96c0-17.7 14.3-32 32-32h256v64H96c-17.7 0-32-14.3-32-32m153.6-296.5 6.4 8.5 6.4-8.5c11.1-14.8 28.5-23.5 46.9-23.5 32.4 0 58.7 26.3 58.7 58.7v5.3c0 49.1-65.8 98.1-96.5 118.3-9.5 6.2-21.5 6.2-30.9 0-30.7-20.2-96.5-69.3-96.5-118.3v-5.3c0-32.4 26.3-58.7 58.7-58.7 18.5 0 35.9 8.7 46.9 23.5z"})
);

export default LanBookHeartSolid;
