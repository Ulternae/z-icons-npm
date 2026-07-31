import React from 'react';

export const CoreCircleExclamationRegularDuo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 256a192 192 0 1 0 384 0 192 192 0 1 0-384 0m232 96a40 40 0 1 1-80 0 40 40 0 1 1 80 0m-68-224h56v144h-56z","opacity":".4"}), React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m0-448a192 192 0 1 0 0 384 192 192 0 1 0 0-384m0 328a40 40 0 1 1 0-80 40 40 0 1 1 0 80m28-120h-56V128h56z"})
);

export default CoreCircleExclamationRegularDuo;
