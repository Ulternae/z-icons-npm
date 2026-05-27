import React from 'react';

export const CoreServerRegularDuo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 64v160h384V64zm0 224v160h384V288zm336-144a32 32 0 1 1-64 0 32 32 0 1 1 64 0m0 224a32 32 0 1 1-64 0 32 32 0 1 1 64 0","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"M512 448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64l.3-6.5C3.4 27.3 27.3 3.4 57.5.3L64 0h384l6.5.3c30.1 3.1 54.1 27 57.1 57.1l.3 6.5v384zM64 64v160h384V64zm0 224v160h384V288zm272-144a32 32 0 1 1 64 0 32 32 0 1 1-64 0m0 224a32 32 0 1 1 64 0 32 32 0 1 1-64 0"})
);

export default CoreServerRegularDuo;
