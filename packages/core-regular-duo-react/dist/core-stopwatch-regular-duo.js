import React from 'react';

export function CoreStopwatchRegularDuo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 512 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M96.4 288a160 160 0 1 0 320 0 160 160 0 1 0-320 0m132-124h56v124c0 15.5-12.5 28-28 28s-28-12.5-28-28z","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"M160.4-32h192v64h-192zm256 320a160 160 0 1 0-320 0 160 160 0 1 0 320 0m64 0c0 123.7-100.3 224-224 224s-224-100.3-224-224 100.3-224 224-224c64.6 0 122.8 27.3 163.7 71.1 17.7-11.8 35.4-23.6 53.2-35.5l35.5 53.3c-17.9 12-35.3 23.5-52.1 34.7 15.2 30.2 23.7 64.3 23.7 100.4m-196-96v96c0 15.5-12.5 28-28 28s-28-12.5-28-28V164h56z"})
  );
}

export default CoreStopwatchRegularDuo;
