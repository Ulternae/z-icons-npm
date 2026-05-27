import React from 'react';

export const CoreBuildingRegularDuo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 64h320v384H64zm64 96v64h64v-64zm0 128v64h64v-64zm128-128v64h64v-64zm0 128v64h64v-64z","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"M384 64v384H64V64zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm64 160v64h64v-64zm192 0h-64v64h64zm-64 128v64h64v-64zm-64 0h-64v64h64z"})
);

export default CoreBuildingRegularDuo;
