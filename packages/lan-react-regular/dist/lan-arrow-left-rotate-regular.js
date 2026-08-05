import React from 'react';

export function LanArrowLeftRotateRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M24 0c13.3 0 24 10.7 24 24v78.1L75.1 75c100-100 262.1-100 362 0s100 262.1 0 362-262.1 100-362 0c-14.9-14.9-27.6-31.2-38.1-48.5-6.9-11.3-3.2-26.1 8.1-33s26.1-3.2 33 8.1c8.5 14 18.8 27.3 31 39.4 81.2 81.2 212.9 81.2 294.2 0s81.2-212.9 0-294.2-212.9-81.2-294.2 0L82 135.9h78.2c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 184c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0"})
  );
}

export default LanArrowLeftRotateRegular;
