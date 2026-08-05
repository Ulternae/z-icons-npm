import React from 'react';

export function LanCouchSmallRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M96 192v36.1c25.6 9 44.5 32.1 47.6 59.9h224.9c3.1-27.8 22-50.9 47.6-59.9V192c0-44.2-35.8-80-80-80h-160c-44.2 0-80 35.8-80 80zm-48 36.1V192c0-70.7 57.3-128 128-128h160c70.7 0 128 57.3 128 128v36.1c28 9.9 48 36.6 48 67.9v64c0 40.3-27.1 74.2-64 84.7V456c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8H112v8c0 13.3-10.7 24-24 24s-24-10.7-24-24v-11.3C27.1 434.2 0 400.3 0 360v-64c0-31.4 20-58 48-67.9m0 67.9v64c0 22.1 17.9 40 40 40h336c22.1 0 40-17.9 40-40v-64c0-13.3-10.7-24-24-24s-24 10.7-24 24v16c0 13.3-10.7 24-24 24H120c-13.3 0-24-10.7-24-24v-16c0-13.3-10.7-24-24-24s-24 10.7-24 24"})
  );
}

export default LanCouchSmallRegular;
