import React from 'react';

export const CoreBuildingsRegularDuo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 64h192v384H64zm64 64v64h64v-64zm0 128v64h64v-64z","opacity":".4"}), React.createElement("path", {"fill":"currentColor","d":"M64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H320c0-35.3-28.7-64-64-64zm256 128h192v320H320zm-64 320H64V64h192zm-64-320h-64v64h64zm-64 128v64h64v-64zm320-64h-64v64h64zm-64 128v64h64v-64z"})
);

export default CoreBuildingsRegularDuo;
