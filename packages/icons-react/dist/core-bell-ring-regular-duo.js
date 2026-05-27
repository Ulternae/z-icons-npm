import React from 'react';

export const CoreBellRingRegular-duo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M147.8 352h280.4c-14.7-29.5-29.5-59-44.2-88.4V160c0-43.1-28.4-79.5-67.5-91.7-3-.9-6.1-1.7-9.2-2.4-6.2-1.3-12.7-2-19.3-2-13.3 0-25.9 2.7-37.4 7.5-5.7 2.4-11.2 5.4-16.3 8.9-1.3.9-2.5 1.7-3.7 2.7l-.1.1-.9.6c-22.9 17.5-37.6 45.2-37.6 76.2v103.6c-14.7 29.5-29.5 59-44.2 88.4z","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"M352 512H224v-64h128zM288 0c88.4 0 160 71.6 160 160v88.4L531.8 416H44.2L128 248.4V160C128 71.6 199.6 0 288 0m0 64c-53 0-96 43-96 96v103.6L147.8 352h280.4L384 263.6V160c0-53-43-96-96-96M120 11.8C85.1 51.3 64 103.2 64 160v32H0v-32C0 87 27.2 20.2 72-30.5l48 42.4zm384-42.3C548.8 20.2 576 87 576 160v32h-64v-32c0-56.8-21.1-108.7-56-148.2l48-42.4z"})
);

export default CoreBellRingRegular-duo;
