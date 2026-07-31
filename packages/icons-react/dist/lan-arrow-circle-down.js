import React from 'react';

export const LanArrowCircleDown = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-11.3-164.7c6.2 6.2 16.4 6.2 22.6 0l72-72c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L272 297.4V176c0-8.8-7.2-16-16-16s-16 7.2-16 16v121.4l-44.7-44.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6z"})
);

export default LanArrowCircleDown;
