import React from 'react';

export const LanLandmarkMagnifyingGlassThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M432 286.4c5.4-.8 10.8-1.8 16-3.1V416h24c4.4 0 8 3.6 8 8s-3.6 8-8 8H40c-4.4 0-8-3.6-8-8s3.6-8 8-8h24V208H32c-14.2 0-26.7-9.4-30.7-23s1.5-28.3 13.4-35.9l224-144c10.5-6.8 24.1-6.8 34.6 0l7.7 5c-3.5 4-6.8 8.3-9.9 12.6l-6.5-4.2c-5.3-3.4-12-3.4-17.3 0l-224 144c-6 3.8-8.7 11.2-6.7 18S24.9 192 32 192h224.1c2.6 5.5 5.5 10.8 8.7 16H200v208h112V258c5.1 3.6 10.5 6.9 16 9.9V416h104zM184 208H80v208h104zM0 504c0-4.4 3.6-8 8-8h496c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8m408-279.9a104 104 0 1 0 0-208 104 104 0 1 0 0 208m0 16c-66.3 0-120-53.7-120-120S341.7.1 408 .1s120 53.7 120 120c0 30.2-11.2 57.9-29.6 79l75.3 75.4c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-75.3-75.4c-21.1 18.5-48.8 29.7-79.1 29.7"})
);

export default LanLandmarkMagnifyingGlassThin;
