import React from 'react';

export function CoreListUlRegularDuo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M48 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96m432-16h32V64H160v64zm0 320h32v-64H160v64zm32-160v-64H160v64zM96 256a48 48 0 1 0-96 0 48 48 0 1 0 96 0M48 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96"})
  );
}

export default CoreListUlRegularDuo;
