import React from 'react';

export const LanPipeSmoking = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M433 35c13.8-21.8 37.8-35 63.6-35H624c8.8 0 16 7.2 16 16s-7.2 16-16 16h-55.2L315.1 432.6C283.8 482 229.3 512 170.8 512 76.5 512 0 435.5 0 341.2V239.7c0-25 20.2-45.4 45.2-45.6l196.8-1.8c25.4-.2 46 20.2 46 45.6v26.8zm63.6-3c-14.8 0-28.6 7.6-36.5 20.1L371.8 192h57.8L530.9 32zm-145 192-66 104.5c-3.8 6-11.1 8.8-18 6.8S256 327.1 256 320v-82.1c0-7.6-6.2-13.7-13.7-13.6l-196.8 1.8c-7.5.1-13.5 6.2-13.5 13.6v101.5C32 417.9 94.1 480 170.8 480c47.6 0 91.8-24.4 117.3-64.5L409.4 224z"})
);

export default LanPipeSmoking;
