import React from 'react';

export function CoreLinkSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M640 206.2c0 74.5-55.9 135.9-128 144.7V286c36.6-8.1 64-40.8 64-79.8V192c0-53-43-96-96-96H352c-53 0-96 43-96 96v14.2c0 39.1 27.4 71.7 64 79.8v64.9c-72.1-8.8-128-70.2-128-144.7V192c0-88.4 71.6-160 160-160h128c88.4 0 160 71.6 160 160zM0 305.8c0-74.5 55.9-135.9 128-144.7V226c-36.6 8.1-64 40.8-64 79.8V320c0 53 43 96 96 96h128c53 0 96-43 96-96v-14.2c0-39.1-27.4-71.7-64-79.8v-64.9c72.1 8.8 128 70.2 128 144.7V320c0 88.4-71.6 160-160 160H160C71.6 480 0 408.4 0 320z"})
  );
}

export default CoreLinkSolid;
