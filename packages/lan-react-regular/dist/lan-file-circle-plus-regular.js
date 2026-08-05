import React from 'react';

export function LanFileCirclePlusRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M208 48H96c-8.8 0-16 7.2-16 16v384c0 8.8 7.2 16 16 16h154.9c6.1 17.3 14.6 33.4 25.1 48H96c-35.3 0-64-28.7-64-64V64C32 28.7 60.7 0 96 0h133.5c17 0 33.3 6.7 45.3 18.7l122.5 122.6c12 12 18.7 28.3 18.7 45.3v21.5H280c-39.8 0-72-32.2-72-72v-88zm140.1 112L256 67.9V136c0 13.3 10.7 24 24 24zm83.9 96a144 144 0 1 1 0 288 144 144 0 1 1 0-288m16 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48z"})
  );
}

export default LanFileCirclePlusRegular;
