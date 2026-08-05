import React from 'react';

export function LanCircleTurkishLiraThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-56-384c-4.4 0-8 3.6-8 8v84.9l-34.5 11.5c-4.2 1.4-6.5 5.9-5.1 10.1s5.9 6.5 10.1 5.1l29.5-9.8v47.1l-34.5 11.5c-4.2 1.4-6.5 5.9-5.1 10.1s5.9 6.5 10.1 5.1l29.5-9.8V376c0 4.4 3.6 8 8 8h64c53 0 96-43 96-96 0-4.4-3.6-8-8-8s-8 3.6-8 8c0 44.2-35.8 80-80 80h-56v-71.6l98.5-32.8c4.2-1.4 6.5-5.9 5.1-10.1s-5.9-6.5-10.1-5.1L208 279.6v-47.1l98.5-32.8c4.2-1.4 6.5-5.9 5.1-10.1s-5.9-6.5-10.1-5.1L208 215.6V136c0-4.4-3.6-8-8-8"})
  );
}

export default LanCircleTurkishLiraThin;
