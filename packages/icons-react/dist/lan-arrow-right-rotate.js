import React from 'react';

export const LanArrowRightRotate = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M496 0c-8.8 0-16 7.2-16 16v103.8l-37-39.1C394.4 29.2 326.8 0 256 0 114.6 0 0 114.6 0 256s114.6 256 256 256c98.3 0 183.6-55.4 226.5-136.5 4.1-7.8 1.1-17.5-6.7-21.6s-17.5-1.1-21.6 6.7C416.6 431.6 341.9 480 256 480 132.3 480 32 379.7 32 256S132.3 32 256 32c62 0 121.2 25.5 163.8 70.6l39.1 41.4H352c-8.8 0-16 7.2-16 16s7.2 16 16 16h144c8.8 0 16-7.2 16-16V16c0-8.8-7.2-16-16-16"})
);

export default LanArrowRightRotate;
