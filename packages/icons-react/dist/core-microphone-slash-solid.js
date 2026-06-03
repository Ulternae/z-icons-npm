import React from 'react';

export const CoreMicrophoneSlashSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -45.2 640 602.5',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m621.5 512-45.2 45.3L19 0l45.3-45.2zM160.4 231.9c4 82 69.8 147.8 151.8 151.8l40 40v88.2h-64v-66.3C179.7 430.1 96.3 336.8 96.3 224v-32h24.2zm383.9-7.9c0 35.1-8.1 68.2-22.5 97.8l-49.1-49.1c4.9-15.3 7.6-31.7 7.6-48.7v-32h64zM320.3 0c53 0 96 43 96 96v120.2L241.4 41.3C258.7 16.4 287.5 0 320.3 0"})
);

export default CoreMicrophoneSlashSolid;
