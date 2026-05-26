import React from 'react';

export const LanUniformMartialArtsSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M180 0h37.6c12.3 0 23.5 7 28.8 18.1l61.1 126.7-54.6 143.3h-109V133.2l-46 83.7c-1.3 2.4-2 5-2 7.7L96 384c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224.4c0-18.9 4.8-37.4 13.9-54L80.3 49.7C96 21.2 124.9 2.7 157 .2q1.5-.3 3-.3h20zm209.1 20.6C393.8 8.2 405.7 0 419 0h61q1.5 0 3 .3c32.1 2.5 61 20.9 76.7 49.5l66.4 120.7c9.1 16.5 13.9 35.1 13.9 54V384c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32V224.4c0-2.7-.7-5.3-2-7.7L496 133v154.9H287.2c35.7-93.7 69.7-182.9 101.9-267.4zM320 320h176v32H349.9l47.4 71.1c4.9 7.4 2.9 17.3-4.4 22.2s-17.3 2.9-22.2-4.4l-50.7-76-50.7 76c-4.9 7.4-14.8 9.3-22.2 4.4s-9.3-14.8-4.4-22.2l47.4-71.1H144v-32zm-103.9 85.4c-14.7 22.1-8.7 51.9 13.3 66.6s51.9 8.7 66.6-13.3l24.1-36.1 24.1 36.1c14.7 22.1 44.5 28 66.6 13.3s28-44.5 13.3-66.6L409.9 384h86.3v64c0 35.3-28.7 64-64 64h-224c-35.3 0-64-28.7-64-64v-64h86.3l-14.2 21.4z"})
);

export default LanUniformMartialArtsSolid;
