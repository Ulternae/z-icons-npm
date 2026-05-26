import React from 'react';

export const LanBallotCheck = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M320 32c17.7 0 32 14.3 32 32v384c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm96 128c0 8.8 7.2 16 16 16h112c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16m32 128c0 8.8 7.2 16 16 16h80c8.8 0 16-7.2 16-16s-7.2-16-16-16h-80c-8.8 0-16 7.2-16 16m-32 128c0 8.8 7.2 16 16 16h112c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16M96 104a24 24 0 1 0 0 48 24 24 0 1 0 0-48M72 384a24 24 0 1 0 48 0 24 24 0 1 0-48 0m84.8-166.4c5.3-7.1 3.9-17.1-3.2-22.4s-17.1-3.9-22.4 3.2L96 245.3l-11.2-14.9c-5.3-7.1-15.3-8.5-22.4-3.2s-8.5 15.3-3.2 22.4l24 32c3 4 7.8 6.4 12.8 6.4s9.8-2.4 12.8-6.4z"})
);

export default LanBallotCheck;
