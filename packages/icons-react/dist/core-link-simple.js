import React from 'react';

export const CoreLinkSimple = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M160 64C71.6 64 0 135.6 0 224v64c0 88.4 71.6 160 160 160h96v-64h-96c-53 0-96-43-96-96v-64c0-53 43-96 96-96h96V64zm256 384c88.4 0 160-71.6 160-160v-64c0-88.4-71.6-160-160-160h-96v64h96c53 0 96 43 96 96v64c0 53-43 96-96 96h-96v64zM192 224h-32v64h256v-64z"})
);

export default CoreLinkSimple;
