import React from 'react';

export const LanBuildingCircleExclamation = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M352 32H96c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h64v-80c0-26.5 21.5-48 48-48h32c2 0 4 .1 6 .4-2.6 10.2-4.4 20.8-5.3 31.6H208c-8.8 0-16 7.2-16 16v80h65.4c5.2 11.3 11.4 22 18.6 32H96c-35.3 0-64-28.7-64-64V64C32 28.7 60.7 0 96 0h256c35.3 0 64 28.7 64 64v144.7c-11 .9-21.6 2.7-32 5.4v-150c0-17.7-14.3-32-32-32zm-48 224.9c-5.3 4.7-10.3 9.8-15.1 15.1H272c-8.8 0-16-7.2-16-16v-16c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16zM272 112h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16v-16c0-8.8 7.2-16 16-16m-112 0h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16v-16c0-8.8 7.2-16 16-16m-16 128c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16zm400 160a112 112 0 1 0-224 0 112 112 0 1 0 224 0m-256 0a144 144 0 1 1 288 0 144 144 0 1 1-288 0m144 44a20 20 0 1 1 0 40 20 20 0 1 1 0-40m0-124c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64c0-8.8 7.2-16 16-16"})
);

export default LanBuildingCircleExclamation;
