import React from 'react';

export function CoreShareNodesRegularDuo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M56 256a40 40 0 1 0 80 0 40 40 0 1 0-80 0M376 96a40 40 0 1 0 80 0 40 40 0 1 0-80 0m0 320a40 40 0 1 0 80 0 40 40 0 1 0-80 0","opacity":".4"}), React.createElement("path", {"fill":"currentColor","d":"M456 96a40 40 0 1 0-80 0 40 40 0 1 0 80 0m56 0c0 53-43 96-96 96-25.9 0-49.4-10.2-66.6-26.9l-158.1 79c.5 3.9.7 7.8.7 11.9s-.2 8-.7 11.9l158.1 79c17.3-16.7 40.8-26.9 66.6-26.9 53 0 96 43 96 96s-43 96-96 96-96-43-96-96c0-4 .2-8 .7-11.9l-158.1-79C145.4 341.8 121.9 352 96 352c-53 0-96-43-96-96s43-96 96-96c25.9 0 49.4 10.2 66.6 26.9l158.1-79c-.5-3.9-.7-7.8-.7-11.9 0-53 43-96 96-96s96 43 96 96M136 256a40 40 0 1 0-80 0 40 40 0 1 0 80 0m280 200a40 40 0 1 0 0-80 40 40 0 1 0 0 80"})
  );
}

export default CoreShareNodesRegularDuo;
