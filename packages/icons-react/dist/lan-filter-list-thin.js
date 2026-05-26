import React from 'react';

export const LanFilterListThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M18.7 93.7C13.9 88.8 17.6 80 24.4 80h336c6.8 0 10.5 8.8 5.7 13.7L242.8 217c-1.5 1.5-2.3 3.5-2.3 5.7v201.4c0 6.8-8.8 10.5-13.7 5.7l-80-80c-1.5-1.5-2.3-3.5-2.3-5.7V222.7c0-2.1-.8-4.2-2.3-5.7zM24.4 64c-21.1 0-31.9 26.1-17 41l121 121v118.1c0 6.4 2.5 12.5 7 17l80 80c14.9 14.9 41 4.1 41-17V226l121-121c14.9-14.9 4.1-41-17-41zm432 0c-4.4 0-8 3.6-8 8s3.6 8 8 8h80c4.4 0 8-3.6 8-8s-3.6-8-8-8zm-128 184c-4.4 0-8 3.6-8 8s3.6 8 8 8h208c4.4 0 8-3.6 8-8s-3.6-8-8-8zm0 184c-4.4 0-8 3.6-8 8s3.6 8 8 8h208c4.4 0 8-3.6 8-8s-3.6-8-8-8z"})
);

export default LanFilterListThin;
