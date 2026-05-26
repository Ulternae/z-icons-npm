import React from 'react';

export const LanCompass = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m92.6-389.1-146.5 48.9c-14.3 4.8-25.6 16-30.4 30.4l-48.8 146.4c-8.3 25 15.5 48.8 40.5 40.5l146.5-48.8c14.3-4.8 25.6-16 30.4-30.4l48.8-146.5c8.3-25-15.5-48.8-40.5-40.5m10.1 30.4-48.8 146.5c-1.6 4.8-5.3 8.5-10.1 10.1l-146.5 48.8 48.8-146.5c1.6-4.8 5.3-8.5 10.1-10.1zM256 280a24 24 0 1 0 0-48 24 24 0 1 0 0 48"})
);

export default LanCompass;
