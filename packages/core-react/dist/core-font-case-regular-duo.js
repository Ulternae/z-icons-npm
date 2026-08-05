import React from 'react';

export function CoreFontCaseRegularDuo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M96 176v80h160v-80c0-44.2-35.8-80-80-80s-80 35.8-80 80m352 176v32c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-64h-96c-17.7 0-32 14.3-32 32","opacity":".4"}), React.createElement("path", {"fill":"currentColor","d":"M96 176v80h160v-80c0-44.2-35.8-80-80-80s-80 35.8-80 80m0 144v96h32v64H0v-64h32V176C32 96.5 96.5 32 176 32s144 64.5 144 144v240h32v64H224v-64h32v-96zm320-192h128c53 0 96 43 96 96v256h-64v-5.5c-10 3.5-20.8 5.5-32 5.5h-64c-53 0-96-43-96-96v-32c0-53 43-96 96-96h96v-32c0-17.7-14.3-32-32-32H416zm160 256v-64h-96c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32"})
  );
}

export default CoreFontCaseRegularDuo;
