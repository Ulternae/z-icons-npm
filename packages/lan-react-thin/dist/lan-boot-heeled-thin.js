import React from 'react';

export function LanBootHeeledThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M25.9 0C11.6 0 .5 12.5 2.1 26.7l28.3 248.1c.9 8.1.1 16.3-2.5 24.1L7 361.8c-4.6 13.9-7 28.4-7 43V488c0 13.3 10.7 24 24 24h96c13.3 0 24-10.7 24-24v-34.7l80 42.7c19.7 10.5 41.7 16 64 16h136c13.3 0 24-10.7 24-24v-50.7c0-26-14-49.9-36.6-62.7l-115.8-65.4c-19-10.8-30.1-31.6-28.3-53.4L286.5 26c1.2-14-9.9-26-23.9-26zM16 448h112v40c0 4.4-3.6 8-8 8H24c-4.4 0-8-3.6-8-8zm120-16H16v-27.2c0-12.9 2.1-25.7 6.2-37.9l21-62.9c3.3-10 4.4-20.5 3.2-30.9L18 24.9c-.5-4.7 3.2-8.9 7.9-8.9H112v200c0 4.4 3.6 8 8 8s8-3.6 8-8V16h134.6c4.7 0 8.4 4 8 8.7l-19.2 229.8c-2.3 28 11.8 54.8 36.3 68.7l115.8 65.4c17.6 9.9 28.4 28.6 28.4 48.8v50.7c0 4.4-3.6 8-8 8h-136c-19.7 0-39.1-4.8-56.5-14.1l-91.8-48.9c-1.2-.6-2.5-.9-3.8-.9z"})
  );
}

export default LanBootHeeledThin;
