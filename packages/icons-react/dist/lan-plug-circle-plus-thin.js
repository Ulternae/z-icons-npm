import React from 'react';

export const LanPlugCirclePlusThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M496 272a128 128 0 1 1 0 256 128 128 0 1 1 0-256m0 272a144 144 0 1 0 0-288 144 144 0 1 0 0 288m0-216c-4.4 0-8 3.6-8 8v56h-56c-4.4 0-8 3.6-8 8s3.6 8 8 8h56v56c0 4.4 3.6 8 8 8s8-3.6 8-8v-56h56c4.4 0 8-3.6 8-8s-3.6-8-8-8h-56v-56c0-4.4-3.6-8-8-8M192-24c0-4.4-3.6-8-8-8s-8 3.6-8 8V96H72c-4.4 0-8 3.6-8 8s3.6 8 8 8h24v112c0 103.4 81.7 187.6 184 191.8V504c0 4.4 3.6 8 8 8s8-3.6 8-8v-88.2c2.9-.1 5.8-.3 8.6-.5q-.6-7.5-.6-15.3v-.7c-5.3.5-10.6.7-16 .7-97.2 0-176-78.8-176-176V112h352v98.7c5.3-.9 10.6-1.6 16-2V112h24c4.4 0 8-3.6 8-8s-3.6-8-8-8H400V-24c0-4.4-3.6-8-8-8s-8 3.6-8 8V96H192z"})
);

export default LanPlugCirclePlusThin;
