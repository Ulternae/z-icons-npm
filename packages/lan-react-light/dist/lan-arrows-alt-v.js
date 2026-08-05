import React from 'react';

export function LanArrowsAltV({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M35.3 128 128 35.3l92.7 92.7zm191 32c16.4 0 29.7-13.3 29.7-29.7 0-7.9-3.1-15.4-8.7-21L145 7c-4.5-4.5-10.6-7-17-7s-12.5 2.5-17 7L8.7 109.4C3.1 114.9 0 122.5 0 130.3 0 146.7 13.3 160 29.7 160H112v336c0 8.8 7.2 16 16 16s16-7.2 16-16V160zM368 16v336h-82.3c-16.4 0-29.7 13.3-29.7 29.7 0 7.9 3.1 15.4 8.7 21L367 505c4.5 4.5 10.6 7 17 7s12.5-2.5 17-7l102.3-102.4c5.6-5.6 8.7-13.1 8.7-21 0-16.4-13.3-29.7-29.7-29.7H400v-336c0-8.8-7.2-16-16-16s-16 7.2-16 16zm16 460.7L291.3 384h185.4z"})
  );
}

export default LanArrowsAltV;
