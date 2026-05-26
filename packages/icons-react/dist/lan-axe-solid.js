import React from 'react';

export const LanAxeSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M473.9 105.9 528 160h88c13.3 0 24 10.7 24 24v8c0 123.7-100.3 224-224 224h-8c-13.3 0-24-10.7-24-24v-88L230.6 150.6c-12.5-12.5-12.5-32.8 0-45.3l98.8-98.7c12.5-12.5 32.8-12.5 45.3 0L406.1 38l8-8c18.7-18.7 49.1-18.7 67.9 0s18.7 49.1 0 67.9l-8 8zM228.1 216l67.9 67.9-198.1 198c-18.7 18.7-49.1 18.7-67.9 0s-18.7-49.1 0-67.9z"})
);

export default LanAxeSolid;
