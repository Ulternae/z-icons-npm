import React from 'react';

export const LanTimerThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 0c-4.4 0-8 3.6-8 8v112c0 4.4 3.6 8 8 8s8-3.6 8-8V16.1c128.8 4.2 232 110 232 239.9 0 132.5-107.5 240-240 240S16 388.5 16 256c0-66.3 26.9-126.3 70.3-169.7 3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0C28.7 121.3 0 185.3 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256S397.4 0 256 0m-90.3 154.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l96 96c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3z"})
);

export default LanTimerThin;
