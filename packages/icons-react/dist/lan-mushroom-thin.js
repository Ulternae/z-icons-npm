import React from 'react';

export const LanMushroomThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M271.7 16.5c5.3 9.3 8.3 20 8.3 31.5 0 35.3-28.7 64-64 64s-64-28.7-64-64c0-2.9.2-5.8.6-8.6C183.9 24.4 219 16 256 16c5.3 0 10.5.2 15.7.5m18.6 1.9C406.6 35.1 495.9 135.1 495.9 256c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48 0-88.8 48.3-166.4 120-207.9.1 44.1 35.9 79.9 80 79.9 44.2 0 80-35.8 80-80 0-10.4-2-20.4-5.6-29.6zM64 320h125.1l-22.2 122.3c-3.6 19.6 11.5 37.7 31.5 37.7h115.3c20 0 35.1-18.1 31.5-37.7L322.9 320H448c35.3 0 64-28.7 64-64C512 114.6 397.4 0 256 0S0 114.6 0 256c0 35.3 28.7 64 64 64m118.6 125.1L205.4 320h101.3l22.8 125.1c1.8 9.8-5.8 18.9-15.7 18.9H198.5c-10 0-17.5-9-15.7-18.9zM112 208a16 16 0 1 1 32 0 16 16 0 1 1-32 0m48 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0m208-64a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 80a48 48 0 1 0 0-96 48 48 0 1 0 0 96"})
);

export default LanMushroomThin;
