import React from 'react';

export function LanBackward({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M235.1 64.6c2.9 1.3 4.9 4.2 4.9 7.4v368c0 3.2-1.9 6.1-4.9 7.4s-6.4.6-8.7-1.6l-192-184c-1.6-1.5-2.5-3.6-2.5-5.8s.9-4.3 2.5-5.8l192-184c2.3-2.2 5.7-2.8 8.7-1.6m12.6-29.4c-14.7-6.3-31.8-3.2-43.4 7.9l-192 184C4.5 234.7 0 245.1 0 256s4.5 21.3 12.3 28.9l192 184c11.6 11.1 28.6 14.2 43.4 7.9S272 456 272 440V303.7l172.3 165.1c11.6 11.1 28.6 14.2 43.4 7.9S512 456 512 440V72c0-16-9.6-30.5-24.3-36.8s-31.8-3.2-43.4 7.9L272 208.3V72c0-16-9.6-30.5-24.3-36.8M272 256c0-2.2.9-4.3 2.5-5.8l192-184c2.3-2.2 5.7-2.8 8.7-1.6s4.8 4.2 4.8 7.4v368c0 3.2-1.9 6.1-4.9 7.4s-6.4.6-8.7-1.6l-192-184c-1.6-1.5-2.5-3.6-2.5-5.8z"})
  );
}

export default LanBackward;
