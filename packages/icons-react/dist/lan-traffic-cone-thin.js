import React from 'react';

export const LanTrafficConeThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M248.2 16h15.6c6.5 0 12.4 4 14.8 10l60.5 150H172.9l60.5-150c2.4-6.1 8.3-10 14.8-10m97.4 176 58.1 144H108.4l58.1-144zm64.5 160 58.1 144H43.9L102 352h308.2zM218.5 20 26.6 496H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h496c4.4 0 8-3.6 8-8s-3.6-8-8-8h-18.6L293.5 20c-4.9-12.1-16.6-20-29.7-20h-15.6c-13.1 0-24.8 7.9-29.7 20"})
);

export default LanTrafficConeThin;
