import React from 'react';

export const LanCarBuildingRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M320 48H64c-8.8 0-16 7.2-16 16v352c0 8.8 7.2 16 16 16h80v48H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h256c35.3 0 64 28.7 64 64v47.8h-48V64c0-8.8-7.2-16-16-16M144 496v-8.2c0 2.8.2 5.5.5 8.2zM112 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16M96 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16zm219.3-32.1c-10.5 0-19.8 6.8-22.9 16.8l-19.7 63.2h222.7l-19.7-63.2c-3.1-10-12.4-16.8-22.9-16.8H315.4zm-68.7 2.5c9.4-30.1 37.2-50.5 68.7-50.5h137.4c31.5 0 59.3 20.5 68.7 50.5l28 89.5c16.1 11.6 26.6 30.6 26.6 51.9v136c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8H240v8c0 13.3-10.7 24-24 24s-24-10.7-24-24v-136c0-21.4 10.5-40.3 26.6-51.9zM528 399.9v-48c0-8.8-7.2-16-16-16H256c-8.8 0-16 7.2-16 16v80h288zm-240-40a24 24 0 1 1 0 48 24 24 0 1 1 0-48m168 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0"})
);

export default LanCarBuildingRegular;
