import React from 'react';

export function CoreCircleUserRegularDuo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 256c0 52.7 21.3 100.5 55.7 135.2C159.2 366.3 205.9 352 256 352s96.8 14.4 136.2 39.2C426.7 356.5 448 308.7 448 256c0-106-86-192-192-192S64 150 64 256m288-32a96 96 0 1 1-192 0 96 96 0 1 1 192 0","opacity":".4"}), React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m0-104c-30.9 0-60.1 7-86.2 19.5C195.7 440.6 225 448 256 448s60.3-7.4 86.2-20.5C316.1 415 286.9 408 256 408m0-344C150 64 64 150 64 256c0 52.7 21.3 100.5 55.7 135.2C159.2 366.3 205.9 352 256 352s96.8 14.4 136.2 39.2C426.7 356.5 448 308.7 448 256c0-106-86-192-192-192m0 256a96 96 0 1 1 0-192 96 96 0 1 1 0 192m0-136a40 40 0 1 0 0 80 40 40 0 1 0 0-80"})
  );
}

export default CoreCircleUserRegularDuo;
