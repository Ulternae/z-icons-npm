import React from 'react';

export function CoreBoltRegularDuo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32.1 576 576.2',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"m143.6 266.9 155.2-155.2c0 .3 0 .6.1 1 1.6 20.5 3.2 41 4.7 61.5 2 26.6 18.4 49 41.4 59.7 7.7 3.6 16.1 5.8 24.9 6.5l62.4 4.8-155.2 155.2-4.8-62.4c-2.7-35.4-30.9-63.5-66.3-66.3l-61.5-4.7c-.3 0-.6 0-1-.1z","opacity":".4"}), React.createElement("path", {"fill":"currentColor","d":"M0 320c50.5 3.9 117.6 9 201.2 15.5 3.9.3 7.1 3.4 7.4 7.4 6.4 83.6 11.6 150.6 15.5 201.2l292.4-292.4L576 192c-50.5-3.9-117.6-9-201.2-15.5-3.9-.3-7.1-3.4-7.4-7.4-6.4-83.6-11.6-150.6-15.5-201.2L59.5 260.3zm298.9-208.4 4.8 62.4c2.7 35.4 30.9 63.5 66.3 66.3l62.4 4.8-155.2 155.2-4.8-62.4c-2.7-35.4-30.9-63.5-66.3-66.3l-62.4-4.8z"})
  );
}

export default CoreBoltRegularDuo;
