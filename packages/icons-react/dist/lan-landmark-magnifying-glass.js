import React from 'react';

export const LanLandmarkMagnifyingGlass = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M416 287.9c11-.5 21.7-2.1 32-4.6V400h16c8.8 0 16 7.2 16 16s-7.2 16-16 16H48c-8.8 0-16-7.2-16-16s7.2-16 16-16h16V208H32c-14.2 0-26.7-9.4-30.7-23s1.5-28.3 13.4-35.9l224-144c10.5-6.8 24.1-6.8 34.6 0l7.7 5q-10.5 12.15-18.6 26.1L256 32 32 176h217.5c4 11.3 9.1 22 15.3 32H208v192h96V252c9.8 7.8 20.6 14.5 32 19.9V400h80zM96 208v192h80V208zM0 496c0-8.8 7.2-16 16-16h480c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16m408-287.9a88 88 0 1 0 0-176 88 88 0 1 0 0 176m0 32c-66.3 0-120-53.7-120-120S341.7.1 408 .1s120 53.7 120 120c0 27.3-9.1 52.6-24.6 72.7l67.9 68c6.2 6.3 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-67.8-67.9c-20.2 15.4-45.4 24.6-72.8 24.6z"})
);

export default LanLandmarkMagnifyingGlass;
