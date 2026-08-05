import React from 'react';

export function LanStoolThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M344 32c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40h-44.3L328 471.3c.4 4.4-2.9 8.3-7.2 8.7-4.4.4-8.3-2.9-8.7-7.2L297.4 312H86.6L72 472.7c-.4 4.4-4.3 7.6-8.7 7.2s-7.6-4.3-7.2-8.7L84.3 160H40c-22.1 0-40-17.9-40-40V72c0-22.1 17.9-40 40-40zM100.3 160.7 88 296h207.9l-12.3-135.3-.1-.7H100.3l-.1.7zM40 48c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h304c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24z"})
  );
}

export default LanStoolThin;
