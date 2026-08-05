import React from 'react';

export function LanCaretLargeDownThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M192 384c10.2 0 20.1-4.1 27.3-11.3l154.8-154.8c6.4-6.4 9.9-15 9.9-24l-.2-3.5c-1.6-16-14.3-28.7-30.3-30.3l-3.5-.2H33.9c-17.6 0-32 13.4-33.8 30.5l-.1 3.5c0 7.9 2.7 15.5 7.7 21.5l2.3 2.5 154.7 154.8c7.2 7.2 17.1 11.3 27.3 11.3m0-16c-6 0-11.8-2.4-16-6.6L21.2 206.6c-3.4-3.4-5.2-7.9-5.2-12.7 0-9.9 8-17.9 17.9-17.9H350c9.9 0 17.9 8 17.9 17.9 0 4.8-1.9 9.3-5.3 12.7L208 361.4c-4.2 4.2-10 6.6-16 6.6"})
  );
}

export default LanCaretLargeDownThin;
