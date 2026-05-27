import React from 'react';

export const CoreStopRegularDuo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 128h256v256H64z","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"M320 128v256H64V128zM64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64z"})
);

export default CoreStopRegularDuo;
