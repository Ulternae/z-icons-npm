import React from 'react';

export const LanUserCirclePlusThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M336 128a112 112 0 1 0-224 0 112 112 0 1 0 224 0m-240 0a128 128 0 1 1 256 0 128 128 0 1 1-256 0M16 480v24c0 4.4-3.6 8-8 8s-8-3.6-8-8v-24c0-97.2 78.8-176 176-176h89.7c-3 5.2-5.8 10.5-8.3 16H176c-88.4 0-160 71.6-160 160m544-80a128 128 0 1 0-256 0 128 128 0 1 0 256 0m-272 0a144 144 0 1 1 288 0 144 144 0 1 1-288 0m152-64v56h56c4.4 0 8 3.6 8 8s-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8s-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8s3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8s8 3.6 8 8"})
);

export default LanUserCirclePlusThin;
