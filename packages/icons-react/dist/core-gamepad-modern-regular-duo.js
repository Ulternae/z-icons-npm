import React from 'react';

export const CoreGamepadModernRegularDuo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 224v128c0 35.3 28.7 64 64 64h32c20.8-27.7 36.8-49.1 48-64h160c11.2 14.9 27.2 36.3 48 64h32c35.3 0 64-28.7 64-64V224c0-70.7-57.3-128-128-128H192c-70.7 0-128 57.3-128 128m48-28h52v-52h56v52h52v56h-52v52h-56v-52h-52zm296-20a40 40 0 1 1-80 0 40 40 0 1 1 80 0m64 96a40 40 0 1 1-80 0 40 40 0 1 1 80 0","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"m336 416 48 64h64c70.7 0 128-57.3 128-128V224c0-106-86-192-192-192H192C86 32 0 118 0 224v128c0 70.7 57.3 128 128 128h64l48-64zm-176 0h-32c-35.3 0-64-28.7-64-64V224c0-70.7 57.3-128 128-128h192c70.7 0 128 57.3 128 128v128c0 35.3-28.7 64-64 64h-32c-20.8-27.7-36.8-49.1-48-64H208c-11.2 14.9-27.2 36.3-48 64m248-240a40 40 0 1 0-80 0 40 40 0 1 0 80 0m24 136a40 40 0 1 0 0-80 40 40 0 1 0 0 80M164 196h-52v56h52v52h56v-52h52v-56h-52v-52h-56z"})
);

export default CoreGamepadModernRegularDuo;
