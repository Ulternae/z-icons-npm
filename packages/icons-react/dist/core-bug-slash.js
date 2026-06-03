import React from 'react';

export const CoreBugSlash = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -45.2 640 602.5',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m621.5 512-45.2 45.3L19 0l45.3-45.2zM224.3 295.8V352c0 53 43 96 96 96 16.3 0 31.6-4.1 45-11.3l46.5 46.5c-25.9 18.1-57.4 28.8-91.5 28.8-52.3 0-98.8-25.1-128-64h-96v-64h67.2c-1.6-7.7-2.6-15.7-3-23.8l-.2-8.2v-32h-64v-64h64v-24.2zm250.6-278-41.1 61.5c13.8 13.9 25.1 30.4 33.1 48.7h77.3v64h-64v64h64v64H520L416.2 216.2V192c0-53-43-96-96-96-7.5 0-14.7.9-21.7 2.5l-49.7-49.7C270.3 38.1 294.6 32 320.2 32c21.3 0 41.7 4.2 60.3 11.8l41.1-61.5 53.2 35.5z"})
);

export default CoreBugSlash;
