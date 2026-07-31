import React from 'react';

export const LanUserMicrophoneRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M304 128a80 80 0 1 0-160 0 80 80 0 1 0 160 0m-208 0a128 128 0 1 1 256 0 128 128 0 1 1-256 0M48 480v8c0 13.3-10.7 24-24 24S0 501.3 0 488v-8c0-97.2 78.8-176 176-176h96q12.75 0 24.9 1.8c-13.3 11.5-22.4 27.8-24.5 46.2H176c-70.7 0-128 57.3-128 128m352-208c0-26.5 21.5-48 48-48s48 21.5 48 48v96c0 26.5-21.5 48-48 48s-48-21.5-48-48zm-56 64c13.3 0 24 10.7 24 24v8c0 44.2 35.8 80 80 80s80-35.8 80-80v-8c0-13.3 10.7-24 24-24s24 10.7 24 24v8c0 62.5-44.8 114.5-104 125.8V520c0 13.3-10.7 24-24 24s-24-10.7-24-24v-26.2c-59.2-11.3-104-63.3-104-125.8v-8c0-13.3 10.7-24 24-24"})
);

export default LanUserMicrophoneRegular;
