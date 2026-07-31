import React from 'react';

export const LanBoxArrowDownArrowUp = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M335.1 16c20.7 0 40.1 10 52.1 26.8l48.9 68.5c7.7 10.8 11.9 23.9 11.9 37.2V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V148.5c0-13.3 4.2-26.3 11.9-37.2l48.9-68.5C72.9 26 92.3 16 112.9 16H335zM32 416c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V160H32zm263.2-205.4c6.2-4.1 14.7-3.4 20.1 2.1l48 48 2.1 2.5c4.1 6.2 3.4 14.7-2.1 20.1s-13.9 6.2-20.1 2.1l-2.5-2.1-20.7-20.7V384c0 8.8-7.2 16-16 16s-16-7.2-16-16V262.6l-20.7 20.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l48-48zM144 208c8.8 0 16 7.2 16 16v121.4l20.7-20.7 2.5-2.1c6.2-4.1 14.7-3.4 20.1 2.1s6.2 13.9 2.1 20.1l-2.1 2.5-48 48c-5.5 5.5-13.9 6.2-20.1 2.1l-2.5-2.1-48-48c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l20.7 20.7V224c0-8.8 7.2-16 16-16M112.9 48c-10.3 0-20 5-26 13.4L39.3 128H208V48zM240 128h168.7l-47.6-66.6c-6-8.4-15.7-13.4-26-13.4H240z"})
);

export default LanBoxArrowDownArrowUp;
