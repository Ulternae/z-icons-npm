import React from 'react';

export const CoreGaugeLowRegularDuo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 256a192 192 0 1 0 384 0 192 192 0 1 0-384 0m32 0c0-16.7 12.7-30.4 29-31.9l26.7 53.3c-5.9 6.5-14.3 10.5-23.7 10.5-17.7 0-32-14.3-32-32zm39-83.5 50-25L255.3 288h.7c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64c0-14.7 5-28.1 13.2-38.9zM288 128a32 32 0 1 1-64 0 32 32 0 1 1 64 0m96 32a32 32 0 1 1-64 0 32 32 0 1 1 64 0m32 96a32 32 0 1 1-64 0 32 32 0 1 1 64 0","opacity":".4"}), React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m0-448a192 192 0 1 0 0 384 192 192 0 1 0 0-384m-.7 224h.7c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64c0-14.7 5-28.1 13.2-38.9L135 172.5l50-25zm-103.6-10.5C145.8 284 137.4 288 128 288c-17.7 0-32-14.3-32-32 0-16.7 12.7-30.4 29-31.9l26.7 53.3zM384 288a32 32 0 1 1 0-64 32 32 0 1 1 0 64m-32-96a32 32 0 1 1 0-64 32 32 0 1 1 0 64m-96-32a32 32 0 1 1 0-64 32 32 0 1 1 0 64"})
);

export default CoreGaugeLowRegularDuo;
