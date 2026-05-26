import React from 'react';

export const LanBoxCheckThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M335.1 16c20.7 0 40.1 10 52.1 26.8l48.9 68.5c7.7 10.8 11.9 23.9 11.9 37.2V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V148.5c0-13.3 4.2-26.3 11.9-37.2l48.9-68.5C72.9 26 92.3 16 112.9 16H335zM16 148.5V416c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V148.5c0-1.5-.1-3-.2-4.5H16.2c-.1 1.5-.2 3-.2 4.5m289.7 63.2c2.6-3.6 7.6-4.3 11.2-1.7s4.3 7.6 1.8 11.2L204.9 377.5c-1.4 1.9-3.6 3.1-5.9 3.3s-4.7-.7-6.3-2.4l-62.3-64.5c-3.1-3.2-3-8.2.2-11.3s8.2-3 11.3.2l55.7 57.6zM112.9 32c-15.5 0-30.1 7.5-39.1 20.1l-48.9 68.5c-1.7 2.3-3.1 4.8-4.3 7.4H216V32zM232 128h195.4c-1.2-2.6-2.7-5-4.3-7.4l-49-68.5C365.1 39.5 350.5 32 335 32H231.9v96z"})
);

export default LanBoxCheckThin;
