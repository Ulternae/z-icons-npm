import React from 'react';

export function LanUTurnUpRightRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -15.976 512.023 527.976',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M505.3 147.7c10.3-12.8 7.2-28 1.1-37.7l-3-4-1-1L390.7-6.7l-3.9-3.3c-20.4-14.8-50.8-.6-50.8 26v32H216l-11.1.3C90.8 54.1 0 148.4 0 264s90.8 209.9 204.9 215.7l11.1.3h200c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32H216l-5.7-.3C182 316.9 160 293 160 264s22-52.9 50.3-55.7l5.7-.3h120v32c0 24.4 26.2 39.2 47 28.3l3-1.9 1.9-1.4 2.7-2.3 112-112 2.6-2.9zM384 201.4V184c0-13.3-10.7-24-24-24H216l-5.3.1c-55 2.8-98.7 48.2-98.7 103.9s43.7 101.1 98.7 103.9l5.3.1h184v64H216l-8.7-.2C118.6 427.3 48 353.9 48 264s70.6-163.3 159.3-167.8l8.7-.2h144c13.3 0 24-10.7 24-24V54.6l73.4 73.4z"})
  );
}

export default LanUTurnUpRightRegular;
