import React from 'react';

export const CoreClipboardCheckRegularDuo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 448 544',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 96v352h320V96h-64v64H128V96zm40.4 208 39.6-39.6 48 48 92.2-92.2 19.8-19.8 39.6 39.6-19.8 19.8-112 112c-10.9 10.9-28.7 10.9-39.6 0z","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"M224-32c41.8 0 77.4 26.7 90.5 64H384c35.3 0 64 28.7 64 64v352c0 33.1-25.2 60.4-57.5 63.7l-6.5.3H64l-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 448V96c0-35.3 28.7-64 64-64h69.5c13.1-37.3 48.7-64 90.5-64M64 448h320V96h-64v64H128V96H64zm279.6-208-19.8 19.8-112 112c-10.9 10.9-28.7 10.9-39.6 0L104.4 304l39.6-39.6 48 48 92.2-92.2 19.8-19.8zM224 24c-22.1 0-40 17.9-40 40v40h80V64c0-22.1-17.9-40-40-40"})
);

export default CoreClipboardCheckRegularDuo;
