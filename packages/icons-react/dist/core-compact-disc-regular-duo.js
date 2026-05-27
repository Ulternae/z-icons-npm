import React from 'react';

export const CoreCompactDiscRegularDuo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 256v-3.4q.3-14.7 2.7-28.8l94.8 14.9c-1 5.3-1.5 10.7-1.5 16.3v.9c0 53 43 96 96 96 1.5 0 2.9 0 4.4-.1h1c21.6-1.2 41.3-9.5 56.7-22.7l60.4 74.6c-28.1 23.3-62.8 38.7-101 43-1.4.2-2.8.3-4.2.4h-.1c-5.7.5-11.5.8-17.3.8-106 0-192-86-192-192zm69.5-147.8c22.9-19 50.2-32.7 80.1-39.5 2.7-.6 5.5-1.2 8.2-1.7 11.1-2 22.5-3 34.1-3 106 0 192 86 192 192v3.9c-.2 9.6-1.2 19.1-2.7 28.3l-94.8-14.9q1.35-7.65 1.5-15.6v-1.5c0-53-43-96-96-96-3 0-5.9.1-8.8.4-20.3 1.8-38.7 10-53.4 22.4l-60.4-74.7z","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m0-448a192 192 0 1 0 0 384 192 192 0 1 0 0-384m0 288a96 96 0 1 1 0-192 96 96 0 1 1 0 192m0-128a32 32 0 1 0 0 64 32 32 0 1 0 0-64"})
);

export default CoreCompactDiscRegularDuo;
