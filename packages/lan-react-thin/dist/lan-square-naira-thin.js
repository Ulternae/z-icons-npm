import React from 'react';

export function LanSquareNairaThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm133.5 32.4c3.3-1.1 6.9.1 8.9 2.9L233.9 256H304V136c0-4.4 3.6-8 8-8s8 3.6 8 8v120h24c4.4 0 8 3.6 8 8s-3.6 8-8 8h-24v104c0 3.5-2.2 6.5-5.5 7.6s-6.9-.1-8.9-2.9L225.9 272h-81.8v104c0 4.4-3.6 8-8 8s-8-3.6-8-8V272h-24c-4.4 0-8-3.6-8-8s3.6-8 8-8h24V136c0-3.5 2.2-6.5 5.5-7.6zM304 351.6V272h-58.3zM144 160.4V256h70.1z"})
  );
}

export default LanSquareNairaThin;
