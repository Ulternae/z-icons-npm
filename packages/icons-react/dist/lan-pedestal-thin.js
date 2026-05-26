import React from 'react';

export const LanPedestalThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96 16c-26.5 0-48 21.5-48 48v432h352V64c0-26.5-21.5-48-48-48zM32 496V64C32 28.7 60.7 0 96 0h256c35.3 0 64 28.7 64 64v432h24c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8zm80-400a16 16 0 1 1 32 0 16 16 0 1 1-32 0m208-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32"})
);

export default LanPedestalThin;
