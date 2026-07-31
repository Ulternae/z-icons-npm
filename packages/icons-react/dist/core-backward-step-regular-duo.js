import React from 'react';

export const CoreBackwardStepRegularDuo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M191.6 256 320 372.8V139.2C277.2 178.1 234.4 217 191.6 256","opacity":".4"}), React.createElement("path", {"fill":"currentColor","d":"M352 448h32V64h-76.4l-9.2 8.3-176 160C115.8 238.4 112 247 112 256s3.8 17.6 10.5 23.7l176 160 9.2 8.3h44.4zM191.6 256 320 139.2v233.6zM0 448h64V64H0z"})
);

export default CoreBackwardStepRegularDuo;
