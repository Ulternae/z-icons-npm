import React from 'react';

export const CoreTrashRegularDuo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M96 160h256v288H96z","opacity":".4"}), React.createElement("path", {"fill":"currentColor","d":"M96 64c0-35.3 28.7-64 64-64h128c35.3 0 64 28.7 64 64v32h96v64h-32v288c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V160H0V96h96zm64 32h128V64H160zm192 64H96v288h256z"})
);

export default CoreTrashRegularDuo;
