import React from 'react';

export const LanArrowsTurnToDots = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M260.7 4.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L230.6 80H352c53 0 96 43 96 96v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32c0-35.3-28.7-64-64-64H230.6l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-80-80c-6.2-6.2-6.2-16.4 0-22.6zm-73.4 272 80 80c6.2 6.2 6.2 16.4 0 22.6l-80 80c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l52.7-52.7H96c-35.3 0-64 28.7-64 64v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32c0-53 43-96 96-96h121.4l-52.7-52.7c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0M384 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-96a64 64 0 1 1 0 128 64 64 0 1 1 0-128M32 96a32 32 0 1 0 64 0 32 32 0 1 0-64 0m96 0A64 64 0 1 1 0 96a64 64 0 1 1 128 0"})
);

export default LanArrowsTurnToDots;
