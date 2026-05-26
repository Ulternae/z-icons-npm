import React from 'react';

export const LanTent = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M58.8 210.1 35.5 448h204.7V79.5L73.3 186.2c-8.3 5.3-13.7 14.1-14.6 23.8zM272.2 80.7v154.6L408.9 448h68l-23.2-237.8c-1-9.8-6.4-18.6-14.7-23.9zm0 213.7v153.5h98.7zM3.7 444.9l23.2-238c1.9-19.5 12.7-37.1 29.2-47.7L229.3 48.5c15.7-10 35.8-10.1 51.5-.1l175.3 110.9c16.7 10.6 27.5 28.2 29.5 47.8l23.2 237.8c1.8 18.8-12.9 35.1-31.8 35.1H35.5c-18.9 0-33.7-16.3-31.8-35.1"})
);

export default LanTent;
