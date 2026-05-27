import React from 'react';

export const CoreBellRegular-duo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M116.1 352h280.4c-14.7-29.5-29.5-59-44.2-88.4V160c0-46.4-32.9-85.1-76.7-94-6.2-1.3-12.7-2-19.3-2-13.3 0-25.9 2.7-37.4 7.5-5.7 2.4-11.2 5.4-16.3 8.9-25.5 17.3-42.3 46.5-42.3 79.6v103.6c-14.7 29.5-29.5 59-44.2 88.4","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"M320.3 512h-128v-64h128zm-64-512c88.4 0 160 71.6 160 160v88.4L500.1 416H12.5l83.8-167.6V160c0-88.4 71.6-160 160-160m0 64c-53 0-96 43-96 96v103.6L116.1 352h280.4l-44.2-88.4V160c0-53-43-96-96-96"})
);

export default CoreBellRegular-duo;
