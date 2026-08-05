import React from 'react';

export function LanPersonChalkboardRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 640 576',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M136 24a56 56 0 1 1 112 0 56 56 0 1 1-112 0m-24 496V215.3l-52.7 71c-7.9 10.6-22.9 12.9-33.6 5s-12.9-22.9-5-33.6L88.1 167c25.7-34.6 66.2-55 109.2-55H320V48c0-26.5 21.5-48 48-48h224c26.5 0 48 21.5 48 48v224c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48v-64h48v64h224V48H368v64h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H272v360c0 13.3-10.7 24-24 24s-24-10.7-24-24V368h-64v152c0 13.3-10.7 24-24 24s-24-10.7-24-24m48-200h64V160h-26.7c-13.1 0-25.8 2.9-37.3 8.3z"})
  );
}

export default LanPersonChalkboardRegular;
