import React from 'react';

export const LanComputerClassic = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M384 32c17.7 0 32 14.3 32 32v304c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32zM64 0C28.7 0 0 28.7 0 64v304c0 23.7 12.9 44.4 32 55.4V480c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32v-56.6c19.1-11.1 32-31.7 32-55.4V64c0-35.3-28.7-64-64-64zm0 432h320v48H64zm272-320v112H112V112zM112 80c-17.7 0-32 14.3-32 32v112c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32V112c0-17.7-14.3-32-32-32zm112 256c0 8.8 7.2 16 16 16h112c8.8 0 16-7.2 16-16s-7.2-16-16-16H240c-8.8 0-16 7.2-16 16m-120 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48"})
);

export default LanComputerClassic;
