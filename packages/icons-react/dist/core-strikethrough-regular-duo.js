import React from 'react';

export const CoreStrikethroughRegularDuo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M96 352c0 35.3 28.7 64 64 64h136.1c30.9 0 55.9-25 55.9-55.9q0-4.05-.6-8.1h64.3q.3 4.05.3 8.1c0 66.2-53.7 119.9-119.9 119.9H160c-70.7 0-128-57.3-128-128zm295.9-64H0v-64h56.1C40.9 203.8 32 178.7 32 151.9 32 85.7 85.7 32 151.9 32H288c70.7 0 128 57.3 128 128h-64c0-35.3-28.7-64-64-64H151.9C121 96 96 121 96 151.9c0 26.7 18.8 49.6 45 54.8l86.2 17.2H448v64h-56.1z"})
);

export default CoreStrikethroughRegularDuo;
