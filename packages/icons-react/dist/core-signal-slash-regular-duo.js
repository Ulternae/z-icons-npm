import React from 'react';

export const CoreSignalSlashRegular-duo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M111.3 448 253 324.5 376.5 448zm286.8-249.9L544.2 70.9v273.3z","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"m621.5 512-45.2 45.3L19 0l45.3-45.2zM253 324.5 111.3 448h265.2l64 64H87.2c-30.4 0-55-24.6-55-55 0-15.9 6.9-31 18.9-41.5l156.6-136.3zM550 0c32.1 0 58.2 26.1 58.2 58.2v350l-64-64V70.9L398.1 198.1l-45.3-45.3 159-138.5C522.4 5.1 536 0 550 0"})
);

export default CoreSignalSlashRegular-duo;
