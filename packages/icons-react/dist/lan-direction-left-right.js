import React from 'react';

export const LanDirectionLeftRight = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M540.2 256 448 170.3V208c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16v-37.7L35.8 256l92.2 85.7V304c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v37.7zm28.1-17.6c4.9 4.5 7.7 10.9 7.7 17.6s-2.8 13-7.7 17.6l-112 104c-7 6.5-17.2 8.2-25.9 4.4S416 369.5 416 360v-40H160v40c0 9.5-5.7 18.2-14.4 22s-18.9 2.1-25.9-4.4l-112-104C2.8 269 0 262.7 0 256s2.8-13 7.7-17.6q16.35 17.55 0 0l112-104c7-6.5 17.2-8.2 25.9-4.4s14.4 12.5 14.4 22v40h256v-40c0-9.5 5.7-18.2 14.4-22s18.9-2.1 25.9 4.4z"})
);

export default LanDirectionLeftRight;
