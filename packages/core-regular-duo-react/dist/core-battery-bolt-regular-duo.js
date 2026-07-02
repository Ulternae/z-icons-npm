import React from 'react';

export function CoreBatteryBoltRegularDuo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M189.9 275.1c18 3.7 40.7 8.4 68 14 3.8 26.9 7.2 51.1 10.2 72.7L354 236.9c-18-3.7-40.7-8.4-68-14-3.8-26.9-7.2-51.1-10.3-72.7z","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"m336 176 112 23.1L232.9 512 208 336 96 312.9 311.1 0zm-171.1-48H64v256h102.3l9.1 64H64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64h144.9zM480 64c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H335.1l44-64H480V128H377.7l-9.1-64zM189.9 275.1c18 3.7 40.7 8.4 68 14 3.8 26.9 7.2 51.1 10.2 72.7L354 236.9c-18-3.7-40.7-8.4-68-14-3.8-26.9-7.2-51.1-10.3-72.7zM640 352h-64V160h64z"})
  );
}

export default CoreBatteryBoltRegularDuo;
