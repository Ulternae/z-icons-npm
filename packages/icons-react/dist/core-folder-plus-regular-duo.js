import React from 'react';

export const CoreFolderPlusRegularDuo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 96v320h384V160H261.5l-64-64zm96 164h68v-68h56v68h68v56h-68v68h-56v-68h-68z","opacity":".4"}), React.createElement("path", {"fill":"currentColor","d":"M288 96h160c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h160zM64 416h384V160H261.5l-64-64H64zm220-156h68v56h-68v68h-56v-68h-68v-56h68v-68h56z"})
);

export default CoreFolderPlusRegularDuo;
