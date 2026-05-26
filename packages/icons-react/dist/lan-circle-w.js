import React from 'react';

export const LanCircleW = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-80.5-339.9c-2.1-8.6-10.8-13.8-19.4-11.6s-13.8 10.8-11.6 19.4l40 160c1.7 6.9 7.7 11.8 14.8 12.1s13.5-4 15.8-10.7L256 224.4l40.9 116.9c2.3 6.7 8.8 11 15.8 10.7s13.1-5.2 14.8-12.1l40-160c2.1-8.6-3.1-17.3-11.6-19.4s-17.3 3.1-19.4 11.6l-27 108.1-38.3-109.5c-2.2-6.4-8.3-10.7-15.1-10.7s-12.9 4.3-15.1 10.7l-38.3 109.5-27-108.1z"})
);

export default LanCircleW;
