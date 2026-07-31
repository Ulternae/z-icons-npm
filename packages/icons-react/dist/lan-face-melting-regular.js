import React from 'react';

export const LanFaceMeltingRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M227.6 296.9c-6.4-11.6-21-15.8-32.6-9.5s-15.8 21-9.5 32.6c15.4 27.9 45.7 61.3 97.2 75.1s94.4.1 121.7-16.4c11.3-6.9 15-21.6 8.1-33s-21.6-15-33-8.1c-18.6 11.2-48.1 20.9-84.4 11.1s-57.1-32.9-67.6-51.9zM224 192a32 32 0 1 1 64 0 32 32 0 1 1-64 0m192 64a32 32 0 1 0 0-64 32 32 0 1 0 0 64m152.9 60.1C561 349 587.1 368 616 368c13.3 0 24 10.7 24 24s-10.7 24-24 24h-64c-13.3 0-24 10.7-24 24s10.7 24 24 24 24 10.7 24 24-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h22.6c38.8 0 61.7-58.8 44.3-93.6C73.7 336 64 297.1 64 256 64 114.6 178.6 0 320 0s256 114.6 256 256c0 20.7-2.5 40.8-7.1 60.1M528 256c0-114.9-93.1-208-208-208s-208 93.1-208 208c0 33.5 7.9 65 21.9 93 18 35.9 13.1 81.3-7.7 115h357.9c-13.4-37.9 8.3-81.4 47.2-93-10.9-20.5-14.2-44.9-9.1-66.1 3.8-15.6 5.8-32 5.8-48.9"})
);

export default LanFaceMeltingRegular;
