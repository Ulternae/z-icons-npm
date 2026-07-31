import React from 'react';

export const CoreGridRoundRegularDuo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 112a48 48 0 1 0 96 0 48 48 0 1 0-96 0m0 288a48 48 0 1 0 96 0 48 48 0 1 0-96 0m288-288a48 48 0 1 0 96 0 48 48 0 1 0-96 0m0 288a48 48 0 1 0 96 0 48 48 0 1 0-96 0","opacity":".4"}), React.createElement("path", {"fill":"currentColor","d":"M112 512a112 112 0 1 1 0-224 112 112 0 1 1 0 224m288 0a112 112 0 1 1 0-224 112 112 0 1 1 0 224M112 352a48 48 0 1 0 0 96 48 48 0 1 0 0-96m288 0a48 48 0 1 0 0 96 48 48 0 1 0 0-96M112 224a112 112 0 1 1 0-224 112 112 0 1 1 0 224m288 0a112 112 0 1 1 0-224 112 112 0 1 1 0 224M112 64a48 48 0 1 0 0 96 48 48 0 1 0 0-96m288 0a48 48 0 1 0 0 96 48 48 0 1 0 0-96"})
);

export default CoreGridRoundRegularDuo;
