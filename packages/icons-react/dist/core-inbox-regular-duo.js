import React from 'react';

export const CoreInboxRegularDuo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 64v196h113.3l32 64h93.4c18.9-37.9 29.6-59.2 32-64H448V64z","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"M64 64v196h113.3l32 64h93.4c18.9-37.9 29.6-59.2 32-64H448V64zm0 252v132h384V316h-78.7c-18.9 37.9-29.6 59.2-32 64H174.7c-2.4-4.8-13.1-26.1-32-64zM0 64C0 28.7 28.7 0 64 0h384c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"})
);

export default CoreInboxRegularDuo;
