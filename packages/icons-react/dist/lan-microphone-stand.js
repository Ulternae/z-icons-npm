import React from 'react';

export const LanMicrophoneStand = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m223.8 200.9 87.4 87.4-178.6 163.1c-12.6 11.5-32.1 11.1-44.2-1l-26.6-26.8c-12.1-12.1-12.5-31.6-1-44.2l163-178.6zM334.6 268l.8-.8-90.5-90.5-.8.8-.1-11.4c-.2-20.7 7.6-41.4 23.4-57.2l11.4-11.4 135.8 135.8-11.4 11.4c-15.8 15.8-36.5 23.6-57.2 23.4zM437.1 75c37.4 37.4 37.5 98.1.1 135.6L301.5 74.8c37.5-37.3 98.2-37.3 135.6.2m22.6-22.6c-50-50-131-50-181 0l-33.9 33.9c-22.1 22.1-33 51.1-32.8 80.1L37.2 357.8C14.1 383 15 422 39.2 446.2l26.6 26.7C90 497.1 129 498 154.3 475l85.9-78.4v131.5c0 8.8 7.2 16 16 16s16-7.2 16-16V367.4l73.6-67.2c29 .2 58-10.7 80.1-32.8l33.9-33.9c50-50 50-131 0-181z"})
);

export default LanMicrophoneStand;
