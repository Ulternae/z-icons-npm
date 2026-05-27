import React from 'react';

export const CoreSignalWeakRegularDuo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M517.8 0C549.9 0 576 26.1 576 58.2V448c0 35.3-28.7 64-64 64H55c-30.4 0-55-24.6-55-55 0-15.9 6.9-31 18.9-41.5L479.6 14.3C490.2 5.1 503.7 0 517.8 0M79.1 448H512V70.9z"})
);

export default CoreSignalWeakRegularDuo;
