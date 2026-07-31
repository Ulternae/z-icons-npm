import React from 'react';

export const LanFileBracketsCurly = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M203.8.3c14.6 1.5 28.4 7.9 38.9 18.4l122.5 122.5c12 12 18.7 28.3 18.7 45.2v261.5l-.3 6.5c-3.1 30.1-27 54.1-57.1 57.1l-6.5.3H64l-6.5-.3C25.2 508.4 0 481.1 0 448V64C0 30.9 25.2 3.6 57.5.3L64 0h133.5zM64 32c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V192h-96c-35.3 0-64-28.7-64-64V32zm80 224c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16v14.1c0 6.7-2.1 13.2-5.9 18.6l-1.8 2.2-11.2 13.1 11.2 13.1c5 5.8 7.7 13.2 7.7 20.8V384h16c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16c-17.7 0-32-14.3-32-32v-14.1l-20.2-23.5c-5.1-6-5.1-14.8 0-20.8L96 302.1V288c0-17.7 14.3-32 32-32zm112 0c17.7 0 32 14.3 32 32v14.1l20.2 23.5c5.1 6 5.1 14.8 0 20.8L288 369.9V384c0 17.7-14.3 32-32 32h-16c-8.8 0-16-7.2-16-16s7.2-16 16-16h16v-14.1c0-7.6 2.8-15 7.7-20.8l11.2-13.1-11.2-13.1-1.8-2.2c-3.8-5.4-5.9-11.9-5.9-18.6V288h-16c-8.8 0-16-7.2-16-16s7.2-16 16-16zm-32-128c0 17.7 14.3 32 32 32h82.8L224 45.2z"})
);

export default LanFileBracketsCurly;
