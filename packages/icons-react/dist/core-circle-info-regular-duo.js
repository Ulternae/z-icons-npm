import React from 'react';

export const CoreCircleInfoRegularDuo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 256a192 192 0 1 0 384 0 192 192 0 1 0-384 0m132-28h88v96h32v56H196v-56h32v-40h-32zm100-68a40 40 0 1 1-80 0 40 40 0 1 1 80 0","opacity":".4"}), React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m0-448a192 192 0 1 0 0 384 192 192 0 1 0 0-384m28 260h32v56H196v-56h32v-40h-32v-56h88zm-28-124a40 40 0 1 1 0-80 40 40 0 1 1 0 80"})
);

export default CoreCircleInfoRegularDuo;
