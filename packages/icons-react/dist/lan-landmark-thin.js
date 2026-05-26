import React from 'react';

export const LanLandmarkThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M247.3 18.5c5.3-3.4 12-3.4 17.3 0l224 144c6 3.8 8.7 11.2 6.7 18S487.1 192 480 192H32c-7.1 0-13.4-4.7-15.4-11.5s.7-14.1 6.7-18zm26-13.5c-10.5-6.8-24.1-6.8-34.6 0l-224 144c-11.9 7.8-17.4 22.4-13.4 36s16.5 23 30.7 23h32v208H40c-4.4 0-8 3.6-8 8s3.6 8 8 8h432c4.4 0 8-3.6 8-8s-3.6-8-8-8h-24V208h32c14.2 0 26.7-9.4 30.7-23s-1.5-28.3-13.4-35.9l-224-144zM432 208v208H328V208zm-120 0v208H200V208zm-128 0v208H80V208zM0 504c0 4.4 3.6 8 8 8h496c4.4 0 8-3.6 8-8s-3.6-8-8-8H8c-4.4 0-8 3.6-8 8"})
);

export default LanLandmarkThin;
