import React from 'react';

export function LanHomeUserThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M245.1 7.2c6.1-5.7 15.7-5.7 21.8 0l234.6 219c3.2 3 3.4 8.1.4 11.3s-8.1 3.4-11.3.4L464 213.1V456c0 30.9-25.1 56-56 56H104c-30.9 0-56-25.1-56-56V213.1l-26.5 24.8c-3.2 3-8.3 2.8-11.3-.4s-2.8-8.3.4-11.3zM256 18.9 64 198.1V456c0 22.1 17.9 40 40 40h304c22.1 0 40-17.9 40-40V198.1zm0 253.1a48 48 0 1 0 0-96 48 48 0 1 0 0 96m0-112a64 64 0 1 1 0 128 64 64 0 1 1 0-128M144 392c0-39.8 32.2-72 72-72h80c39.8 0 72 32.2 72 72v16c0 4.4-3.6 8-8 8s-8-3.6-8-8v-16c0-30.9-25.1-56-56-56h-80c-30.9 0-56 25.1-56 56v16c0 4.4-3.6 8-8 8s-8-3.6-8-8z"})
  );
}

export default LanHomeUserThin;
