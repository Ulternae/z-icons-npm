import React from 'react';

export const LanImageBrokenRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M225 32c7.6 0 14.8 3.6 19.3 9.8l66.4 89.8c6 8.1 9.3 18 9.3 28.1 0 10.9-3.8 21.5-10.7 29.9L176.2 352.3l66.1 89.4c5.4 7.3 6.2 17 2.1 25.1S232 480 223 480H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64zm159 0c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64h-93.2c5.5-15.6 5.4-32.6 0-48H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16h-51.7l-35.5-48zM64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h111.4l-38.1-51.6c-6-8.1-9.2-18-9.2-28.1 0-10.9 3.8-21.5 10.7-29.9l133-162.7L213 80zm300.7 267.8c4.4 7.4 4.4 16.6.2 24.1-4.3 7.5-12.2 12.1-20.8 12.1h-84.7l-22.3-30.2 76.3-93.3 51.4 87.3zM128 192a32 32 0 1 1 0-64 32 32 0 1 1 0 64"})
);

export default LanImageBrokenRegular;
