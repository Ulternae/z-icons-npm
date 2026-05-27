import React from 'react';

export const CoreCircleDollarRegularDuo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 256a192 192 0 1 0 384 0 192 192 0 1 0-384 0m84-52c0-39.7 32.2-72 72-72h8V96h56v36h52v56H220c-8.8 0-16 7.2-16 16 0 7.6 5.4 14.2 12.8 15.7l89.3 17.8c33.6 6.7 57.8 36.3 57.8 70.6 0 39.7-32.2 72-72 72h-8v36h-56v-36h-52v-56h116c8.8 0 16-7.2 16-16 0-7.6-5.4-14.2-12.8-15.7l-89.3-17.8c-33.6-6.8-57.8-36.3-57.8-70.6","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m0-448a192 192 0 1 0 0 384 192 192 0 1 0 0-384m28 68h52v56H220c-8.8 0-16 7.2-16 16 0 7.6 5.4 14.2 12.8 15.7l89.3 17.8c33.6 6.7 57.8 36.3 57.8 70.6 0 39.7-32.2 72-72 72h-8v36h-56v-36h-52v-56h116c8.8 0 16-7.2 16-16 0-7.6-5.4-14.2-12.8-15.7l-89.3-17.8c-33.6-6.7-57.8-36.3-57.8-70.6 0-39.7 32.2-72 72-72h8V96h56z"})
);

export default CoreCircleDollarRegularDuo;
