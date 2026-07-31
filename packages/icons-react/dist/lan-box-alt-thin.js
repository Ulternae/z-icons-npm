import React from 'react';

export const LanBoxAltThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M432 416V148.5c0-1.5-.1-3-.2-4.5H296v72c0 22.1-17.9 40-40 40h-64c-22.1 0-40-17.9-40-40v-72H16.2c-.1 1.5-.2 3-.2 4.5V416c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48M168 144v72c0 13.3 10.7 24 24 24h64c13.3 0 24-10.7 24-24v-72zm109.4-16L250 32h-51.9l-27.4 96h106.8zm16.6 0h133.4c-1.2-2.6-2.7-5-4.3-7.4l-49-68.5C365.1 39.5 350.5 32 335 32h-68.5l27.4 96zM262 16h73c20.7 0 40.1 10 52.1 26.8l48.9 68.5c7.8 10.9 11.9 23.9 11.9 37.2L448 416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V148.5c0-13.3 4.2-26.3 11.9-37.2l49-68.5C72.9 26 92.3 16 112.9 16zm-80.6 16h-68.5c-15.5 0-30 7.5-39.1 20.1l-48.9 68.5c-1.7 2.3-3.1 4.8-4.3 7.4H154z"})
);

export default LanBoxAltThin;
